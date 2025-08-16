export interface NavItem {
    label: string;
    link: string;
}

const BASE_URL = '/admin';

export const navItems: NavItem[] = [
    { label: 'Dashboard', link: BASE_URL },
    { label: 'Products', link: `${BASE_URL}/products` },
    { label: 'Categories', link: `${BASE_URL}/categories` },
    { label: 'Orders', link: `${BASE_URL}/orders` },
];
