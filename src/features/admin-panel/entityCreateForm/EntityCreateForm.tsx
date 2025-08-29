'use client';

import { AdminForm } from '@/shared/components/AdminForm';
import { useFetch } from '@/shared/hooks/useFetch';
import { makeFieldCreator } from '@/shared/lib/makeFieldCreator';
import type { FormSchema } from '@/shared/types/adminFormTypes';
import type {
    CategoryEntity,
    CategoryFormData,
    ProductEntity,
    ProductFormData,
    SharedEntity,
} from '@/shared/types/newEntityFormTypes';
import { SINGULAR_CATALOG_NAME } from '@/shared/types/urls';

import { getCategories } from '../categories';
import { addEntity } from './services/entityCreateForm.service';

interface Props {
    catalog: SINGULAR_CATALOG_NAME;
}

export default function EntityCreateForm({ catalog }: Props) {
    const { data: categoriesNames } = useFetch(async () => {
        if (catalog === SINGULAR_CATALOG_NAME.PRODUCTS) {
            const categories = await getCategories();

            return categories.map(({ name }) => name);
        }
    }, [catalog]);

    function handleSubmit(data: ProductFormData | CategoryFormData) {
        addEntity(data, catalog);
    }

    const field = makeFieldCreator(catalog);

    const schema: {
        shared: FormSchema<SharedEntity>;
        product: FormSchema<ProductEntity>;
        category: FormSchema<CategoryEntity>;
    } = {
        shared: {
            name: field({
                fieldName: 'name',
                validation: { required: 'Name is required' },
            }),
            description: field('description'),
        },
        product: {
            price: field({
                fieldName: 'price',
                inputType: 'number',
                validation: {
                    required: 'Price is required',
                    min: { value: 0, message: 'Price must be positive' },
                },
            }),
            amount: field({
                fieldName: 'stock',
                inputType: 'number',
                validation: {
                    min: { value: 0, message: 'Stock cannot be negative' },
                },
            }),
            category: {
                ...field({
                    fieldName: 'category',
                    inputType: 'select',
                    validation: { required: 'Select a category' },
                }),
                options: categoriesNames || [],
            },
            brand: field('brand'),
            article: field('article'),
            isActive: field('isActive'),
        },
        category: {
            slug: field({
                fieldName: 'slug',
                validation: { required: 'Slug is required' },
            }),
            imageUrl: field('Image Url'),
            isActive: field('isActive'),
        },
    };

    return (
        <AdminForm<ProductFormData | CategoryFormData>
            schema={{ ...schema[catalog], ...schema.shared }}
            onSubmit={handleSubmit}
        />
    );
}
