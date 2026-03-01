```instructions
---
applyTo: "src/**"
---

# Copilot Instructions (VeloMax FSD Architecture)

## src/features/** - Функціональні модулі

- Дотримуйся MVC структури в рамках feature:
  * `components/` — React компоненти (View)
  * `services/` — бізнес-логіка та API виклики (Model)
  * `hooks/` — React hooks та логіка стану (Controller)
  * `index.ts` — public API feature
- Враховуй слайси при створенні features:
  * `admin-panel/` — функції для адмін-панелі
  * `website/` — функції для публічного сайту
- Дотримуйся конвенцій іменування:
  * PascalCase для React компонентів
  * camelCase для сервісів, хуків та утиліт
  * kebab-case для назв папок features
- Важливо використовувати MVC коли це має сенс, тобто коли коду мало і він не потребує такої структури, можна не розбивати компоненти
- Якщо файлів в рамках feature мало, не створюй зайвих папок
- Використовуй MVC коли це дійсно доцільно (код і структура заради коду і структури це надмірно і недоцільно)
- Використовуй TypeScript для всіх файлів
- Імплементуй Error Boundaries для компонентів
- Додавай JSDoc коментарі для складних функцій
- Використовуй React Hook Form для форм з валідацією
- Інтегруйся з Zustand stores через хуки коли це доцільно
- Додавай Loading та Error стани для async операцій

## src/app/** - Next.js App Router

- **Принцип**: роути без бізнес-логіки, layouts як каркас
- Структура папок:
  * `(website)/` — публічний сайт (route groups)
  * `admin/` — адмін-панель
  * `api/` — API роути
- **Layout файли**: суто каркас та провайдери
  * Винось бізнес-логіку в `entities/` або `features/`
  * Layouts мають тільки структуру та загальні провайдери
- **Page файли**: мінімальна логіка, імпорти з features/entities
- **Special файли**:
  * `loading.tsx` — прості loading стани
  * `error.tsx` — error boundaries
  * `not-found.tsx` — 404 сторінки
- Використовуй TypeScript для всіх файлів
- Дотримуйся Next.js 15 App Router конвенцій

## src/entities/** - Layout компоненти

- **Призначення**: великі компоненти які використовуються лише раз (Header, Footer, Sidebar)
- **НЕ бізнес-сутності**: бізнес-логіка має бути в `features/`
- Структура за слайсами:
  * `admin/` — layout компоненти адмін-панелі
  * `website/` — layout компоненти публічного сайту
- **Організація**: якщо компонент складний — створюй папку з підкомпонентами
- **Інтеграція**: використовуй features через імпорти, не дублюй логіку
- Експортуй через `index.ts` файли
- Використовуй Mantine компоненти для layout
- TypeScript обов'язковий

## src/core/** - Конфігурації та провайдери

- **Структура**:
  * `config/` — конфігурації (auth.ts, api.ts)
  * `providers/` — React провайдери
  * `store/` — глобальні Zustand stores
- **Конфігурації**: централізовані налаштування
  * Використовуй environment variables
  * Валідація конфігурацій на старті
  * TypeScript типи для конфігів
- **Провайдери**: обгортки для глобального стану
- **Stores**: тільки глобальний стан (модальні вікна, теми, аутентифікація)
- Ніякої бізнес-логіки — тільки технічні налаштування
- camelCase для файлів утиліт

## src/shared/** - Перевикористовувані ресурси

- **Принцип**: тільки те, що використовується в кількох місцях
- **Структура**:
  * `components/` — UI компоненти (Button, Input, Modal)
  * `ui/` — іконки, бренд елементи
  * `types/` — TypeScript типи
  * `hooks/` — загальні React hooks
  * `lib/` — утиліти та хелпери
  * `constants/` — константи та конфігурації
  * `styles/` — глобальні стилі
- **Коли НЕ використовувати shared**:
  * Бізнес-логіка без перевикористання → `features/`
  * Специфічна логіка одного компонента → локально
- **UI компоненти**: базовані на Mantine, з TypeScript
- **Утиліти**: pure functions, добре задокументовані
- **Типи**: загальні типи, не бізнес-специфічні
- Обов'язкові `index.ts` для public API

## Конвенції коду VeloMax

### Іменування файлів:
- **Компоненти**: PascalCase (`UserProfile.tsx`, `LoginForm.tsx`)
- **Хуки**: camelCase з префіксом "use" (`useAuth.ts`, `useLocalStorage.ts`)
- **Утиліти**: camelCase (`dateUtils.ts`, `apiHelpers.ts`)
- **Типи**: camelCase (`userTypes.ts`, `apiTypes.ts`)
- **Константи**: camelCase (`urls.ts`, `breakpoints.ts`)

### Експорти:
- **export default**: React компоненти, Next.js сторінки, основні модулі
- **named exports**: утиліти, хуки, константи, типи
- **export type**: завжди для TypeScript типів

### Слайси VeloMax:
- `admin-panel/` — функції адмін-панелі
- `website/` — публічні функції

## Безпека та інтеграції

### Автентифікація:
- Захищені роути через `middleware.ts`
- Перевіряй права доступу для admin функцій
- Використовуй `requireManagerAccess()` для адмін-сторінок

### Валідація форм:
- React Hook Form + zod схеми для валідації
- Error стани для кожного поля
- Loading стани під час submission

## Продуктивність та UX

### Оптимізація:
- Використовуй `next/image` замість `<img>`
- Lazy loading для features через `dynamic()` imports
- Мемоізація через `useMemo`/`useCallback` для важких обчислень
- Error Boundaries для кожної великої feature
- Loading/Error стани для всіх async операцій

### Доступність:
- Семантичні HTML теги
- ARIA атрибути для складних UI
- Keyboard navigation підтримка
- Screen reader friendly тексти

### Mantine UI:
- Використовуй Mantine компоненти як основу
- Кастомізація через theme або styled-components
- Responsive дизайн через Mantine breakpoints
- Консистентні кольори та typography

```
