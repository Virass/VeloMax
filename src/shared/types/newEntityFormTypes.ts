import type { Category } from './category';
import type { Product } from './product';

export type SharedEntity = Pick<
    Product & Category,
    'name' | 'description' | 'image'
>;

export type ProductEntity = Omit<Product, keyof SharedEntity | 'id'>;

export type CategoryEntity = Omit<Category, keyof SharedEntity | 'id'>;

export type ProductFormData = SharedEntity & ProductEntity;

export type CategoryFormData = SharedEntity & CategoryEntity;
