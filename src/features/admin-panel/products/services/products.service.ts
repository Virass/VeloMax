'use server'; // added just for demonstration purposes

import { revalidatePath } from 'next/cache';

import { simulateCrud } from '@/core/config/api';
import { productsExample } from '@/shared/constants/mockData/mockData';
import type { Product } from '@/shared/types/productType';

export async function getProducts(): Promise<Product[]> {
    const products = await simulateCrud(productsExample, 1500);

    return products;
}

export async function addProduct(newProduct: Product): Promise<Product> {
    productsExample.push(newProduct);

    revalidatePath('/products'); // added just for demonstration purposes

    return simulateCrud(newProduct, 500);
}
