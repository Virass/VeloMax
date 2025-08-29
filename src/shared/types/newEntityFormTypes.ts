import type { Category } from './categoryType';
import type { Product } from './productType';

export type SharedEntity = Pick<
    Product & Category,
    'name' | 'description' | 'isActive'
>;

type CommonOmittedKeys = keyof SharedEntity | keyof BasicEntity;

export type ProductEntity = Omit<
    Product,
    CommonOmittedKeys | 'imageUrls' | 'categoryId'
> & {
    category: string;
};

export type CategoryEntity = Omit<Category, CommonOmittedKeys>;

export type ProductFormData = SharedEntity & ProductEntity;

export type CategoryFormData = SharedEntity & CategoryEntity;
