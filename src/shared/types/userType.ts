type UserRole = 'admin' | 'manager' | 'customer' | 'guest';

type BasicUser = BasicEntity & {
    role: UserRole;
}

type User = BasicUser & {
    email?: string;
    password: string;
    name: string;
    phone?: string;
    address?: string;
    isActive: boolean;
    orders?: string[];
    lastOrderDate?: Date;
};
