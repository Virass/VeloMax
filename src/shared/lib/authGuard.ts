import { redirect, RedirectType } from 'next/navigation';

import { URLs } from '../constants/urls';
import { USER_ROLES } from '../types/userType';

//? THIS is server side function
//! Use only on the server side

export const authGuard = (requiredRole: USER_ROLES) => {
    //TODO: Replace with real auth after implementing authentication
    const isAuthenticated = true;
    const userRole: USER_ROLES = USER_ROLES.ADMIN;

    if (!isAuthenticated) {
        redirect(URLs.auth.signIn, RedirectType.push);
    }

    if (!hasAccess(userRole, requiredRole)) {
        redirect(URLs.website.forbidden, RedirectType.push);
    }
};

const hasAccess = (userRole: USER_ROLES, requiredRole: USER_ROLES): boolean => {
    const roleHierarchy: Record<USER_ROLES, USER_ROLES[]> = {
        [USER_ROLES.ADMIN]: [
            USER_ROLES.MANAGER,
            USER_ROLES.CUSTOMER,
            USER_ROLES.GUEST,
        ],
        [USER_ROLES.MANAGER]: [USER_ROLES.CUSTOMER, USER_ROLES.GUEST],
        [USER_ROLES.CUSTOMER]: [USER_ROLES.GUEST],
        [USER_ROLES.GUEST]: [],
    };

    if (userRole === requiredRole) {
        return true;
    }
    return roleHierarchy[userRole]?.includes(requiredRole) ?? false;
};

export const requireCustomerAccess = () => authGuard(USER_ROLES.CUSTOMER);
export const requireManagerAccess = () => authGuard(USER_ROLES.MANAGER);
export const requireAdminAccess = () => authGuard(USER_ROLES.ADMIN);
