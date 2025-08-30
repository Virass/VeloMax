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
} as const;

export const website = {
    main: BASE_URL,
    about: `${BASE_URL}about`,
    contact: `${BASE_URL}contact`,
    forbidden: `${BASE_URL}forbidden`,
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
