'use server'; // added just for demonstration purposes

import { revalidatePath } from 'next/cache';

import { simulateCrud } from '@/core/config/api';
import { productsExample } from '@/shared/constants/mockData';
import type { Product } from '@/shared/types/productType';

export const getProducts = async (): Promise<Product[]> => {
    const products = await simulateCrud(productsExample, 1500);

    return products;
};

export const addProduct = async (newProduct: Product): Promise<Product> => {
    productsExample.push(newProduct);

    revalidatePath('/products'); // added just for demonstration purposes

    return simulateCrud(newProduct, 500);
};

export const getFilteredProducts = async (
    filters?: Record<string, string>,
    options?: { limit?: number; offset?: number }
): Promise<{ filteredProducts: Product[]; total: number }> => {
    const { limit = 8, offset = 0 } = options ?? {};

    // If no filters, just return all products with pagination
    const filteredProducts = filters
        ? productsExample.filter((product) =>
              Object.entries(filters).every(([key, value]) => {
                  if (!value) {
                      return true;
                  }

                  if (key === 'price') {
                      return product.price === Number(value);
                  }

                  return (
                      String((product as any)[key]).toLowerCase() ===
                      value.toLowerCase()
                  );
              })
          )
        : productsExample;

    const paginatedProducts = filteredProducts.slice(offset, offset + limit);

    // Apply pagination
    return {
        filteredProducts: paginatedProducts,
        total: filteredProducts.length,
    };
};
