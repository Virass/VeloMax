import { Group } from '@mantine/core';

import { filterByQuery } from '@/shared/lib/filterByQuery';
import type { Category } from '@/shared/types/categoryType';

import { getCategories } from './services/categories.service';

export default async function CategoriesPage({ query }: { query: string }) {
    const categories = await getCategories();

    const filteredCategories = filterByQuery<Category>(
        categories,
        query,
        (category) => category.name
    );

    return (
        <Group grow>
            {filteredCategories.map(({ id, name, description }) => (
                <div key={id}>
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            ))}
        </Group>
    );
}
