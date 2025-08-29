import {
    type AdminCatalogNameMapping,
    SINGULAR_CATALOG_NAME,
} from '../types/urls';

const BASE_URL = '/';
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
} as const;

export const URLs = {
    admin: adminPanel,
    website: website,
};

export const AdminCatalogNameMap: AdminCatalogNameMapping = {
    categories: SINGULAR_CATALOG_NAME.CATEGORIES,
    products: SINGULAR_CATALOG_NAME.PRODUCTS,
};
