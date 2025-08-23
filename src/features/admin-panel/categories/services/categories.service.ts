'use server'; // added just for demonstration purposes

import { revalidatePath } from 'next/cache';

import { simulateCrud } from '@/core/config/api';
import { categoriesExample } from '@/shared/constants/mockData';
import { type Category } from '@/shared/types/category';

export async function getCategories(): Promise<Category[]> {
    const categories = await simulateCrud(categoriesExample, 1500);

    return categories;
}

export async function addCategory(newCategory: Category): Promise<Category> {
    categoriesExample.push(newCategory);

    revalidatePath('/categories'); // added just for demonstration purposes

    return simulateCrud(newCategory, 500);
}
