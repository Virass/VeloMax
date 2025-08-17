import { URLs } from '@/shared/constants/urls';

export interface NavItem {
    label: string;
    link: string;
}

export const navItems: NavItem[] = [
    { label: 'Dashboard', link: URLs.admin.main },
    { label: 'Products', link: URLs.admin.products },
    { label: 'Categories', link: URLs.admin.categories },
    { label: 'Orders', link: URLs.admin.orders },
];
