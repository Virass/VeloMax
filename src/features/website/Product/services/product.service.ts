import { simulateCrud } from '@/core/config/api';
import { productsExample } from '@/shared/constants/mockData/mockData';
import type { Product } from '@/shared/types/productType';

export const getProduct = async (
    productId: string
): Promise<Product | undefined> => {
    const product = productsExample.find((prod) => prod.id === productId);

    return simulateCrud(product, 1500);
};
