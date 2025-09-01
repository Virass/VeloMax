import {
    type AdminCatalogNameMapping,
    SINGULAR_CATALOG_NAME,
} from '../types/urls';

const BASE_URL = '/';
const AUTH_URL = `${BASE_URL}auth`;
const ADMIN_URL = `${BASE_URL}admin`;

export const adminPanel = {
    dashboard: ADMIN_URL,
    orders: `${ADMIN_URL}/orders`,
    categories: `${ADMIN_URL}/categories`,
    products: `${ADMIN_URL}/products`,
    services: `${ADMIN_URL}/services`,
    customers: `${ADMIN_URL}/customers`,
    settings: `${ADMIN_URL}/settings`,
} as const;

export const website = {
    main: BASE_URL,
    about: `${BASE_URL}about`,
    contact: `${BASE_URL}contact`,
    forbidden: `${BASE_URL}forbidden`,
    categories: `${BASE_URL}categories`,
    products: `${BASE_URL}products`,
    services: `${BASE_URL}services`,
    reviews: `${BASE_URL}reviews`,
    faq: `${BASE_URL}faq`,
    cart: `${BASE_URL}cart`,
    profile: `${BASE_URL}profile`,
    notFound: `${BASE_URL}404`,
} as const;

export const websiteSections: Partial<Record<keyof typeof website, string>> = {
    main: 'головна',
    categories: 'категорії',
    services: 'послуги',
    about: 'про нас',
    reviews: 'відгуки',
    faq: 'часті запитання',
    profile: 'особистий кабінет',
    cart: 'кошик',
};

export const NAV_LINKS = {
    main: { href: '/', label: websiteSections.main },
    categories: { href: '/categories', label: websiteSections.categories },
    services: { href: '/services', label: websiteSections.services },
    about: { href: '/about', label: websiteSections.about },
    reviews: { href: '/reviews', label: websiteSections.reviews },
    cart: { href: '/cart', label: websiteSections.cart },
    profile: { href: '/profile', label: websiteSections.profile },
} as const;

const auth = {
    main: AUTH_URL,
    signIn: `${AUTH_URL}/sign-in`,
    signUp: `${AUTH_URL}/sign-up`,
};

export const URLs = {
    admin: adminPanel,
    website: website,
    auth: auth,
};

export const AdminCatalogNameMap: AdminCatalogNameMapping = {
    categories: SINGULAR_CATALOG_NAME.CATEGORIES,
    products: SINGULAR_CATALOG_NAME.PRODUCTS,
};
