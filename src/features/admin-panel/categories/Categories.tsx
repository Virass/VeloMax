import { Group } from '@mantine/core';

import type { Category } from '@/shared/types/category';

import { getCategories } from './services/categories.service';
import { filterByQuery } from '@/shared/lib/filterByQuery';

export default async function CategoriesPage({ query }: { query: string }) {
    const categories = await getCategories();

    const filteredCategories = filterByQuery<Category>(
        categories,
        query,
        (c) => c.name
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
