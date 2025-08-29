import type { adminPanel, website } from '../constants/urls';

export enum SINGULAR_CATALOG_NAME {
    CATEGORIES = 'category',
    PRODUCTS = 'product',
}

export type Admin_Urls = typeof adminPanel;
export type AdminKey = keyof Admin_Urls;

export type Website_Urls = typeof website;

export type AdminCatalogNameMapping = Partial<
    Record<AdminKey, SINGULAR_CATALOG_NAME>
>;
