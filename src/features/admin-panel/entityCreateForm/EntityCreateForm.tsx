'use client';

import { AdminForm } from '@/entities/admin/ admin-main-layout/components/AdminForm';
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

import { getCategories } from '../categories';
import { addEntity } from './services/entityCreateForm.service';

interface Props {
    catalog: 'product' | 'category';
}

export default function EntityCreateForm({ catalog }: Props) {
    const {
        data: categoriesNames,
        loading,
        error,
    } = useFetch(async () => {
        if (catalog === 'product') {
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
            name: field('name'),
            description: field('description'),
            image: field('image'),
        },
        product: {
            price: field('price', 'number'),
            stock: field('stock', 'number'),
            category: {
                ...field('category', 'select'),
                options: categoriesNames || [],
            },
            brand: field('brand'),
            material: field('material'),
        },
        category: {
            slug: field('slug'),
        },
    };

    return (
        <AdminForm<ProductFormData | CategoryFormData>
            schema={{ ...schema[catalog], ...schema.shared }}
            onSubmit={handleSubmit}
        />
    );
}
