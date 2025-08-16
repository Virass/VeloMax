import { Group } from '@mantine/core';
import { getCategories } from './services/categories.service';

export default async function Categories() {
    const categories = await getCategories();

    return (
        <Group grow>
            {categories.map(({ id, name, description }) => (
                <div key={id}>
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            ))}
        </Group>
    );
}
