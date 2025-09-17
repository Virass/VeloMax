import {
    type AdminCatalogNameMapping,
    SINGULAR_CATALOG_NAME,
} from '../types/urls';
import type { WebsiteNavigationSections } from '../types/websiteNavigation';

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

export const websiteSections = [
    { label: 'головна', link: website.main },
    { label: 'категорії', link: website.categories },
    { label: 'послуги', link: website.services },
    { label: 'про нас', link: website.about },
    { label: 'відгуки', link: website.reviews },
    { label: 'часті питання', link: website.faq },
    { label: 'особистий кабінет', link: website.profile },
    { label: 'кошик', link: website.cart },
];

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
