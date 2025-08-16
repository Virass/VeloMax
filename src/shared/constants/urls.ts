const ADMIN_URL = '/admin';
const BASE_URL = '/';

const adminPanel = {
    main: ADMIN_URL,
    orders: `${ADMIN_URL}/orders`,
    categories: `${ADMIN_URL}/categories`,
    products: `${ADMIN_URL}/products`,
    services: `${ADMIN_URL}/services`,
    customers: `${ADMIN_URL}/customers`,
};

const website = {
    main: BASE_URL,
    about: `${BASE_URL}/about`,
    contact: `${BASE_URL}/contact`,
};

export const URLs = {
    admin: adminPanel,
    website: website,
};
