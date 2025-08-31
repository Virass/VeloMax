type Sections =
    | 'головна'
    | 'категорії'
    | 'послуги'
    | 'про нас'
    | 'відгуки'
    | 'часті питання'
    | 'особистий кабінет'
    | 'кошик';

export type WebsiteNavigation = Record<Sections, string>;
