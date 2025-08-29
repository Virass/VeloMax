export enum USER_ROLES {
    ADMIN = 'admin',
    MANAGER = 'manager',
    CUSTOMER = 'customer',
    GUEST = 'guest'
}

export type BasicUser = BasicEntity & {
    role: USER_ROLES;
};

export type User = BasicUser & {
    email?: string;
    password: string;
    name: string;
    phone?: string;
    address?: string;
    isActive: boolean;
    orders?: string[];
    lastOrderDate?: Date;
};
