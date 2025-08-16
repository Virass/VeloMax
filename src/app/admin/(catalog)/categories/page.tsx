import { Group } from '@mantine/core';

type Category = {
    id: number;
    name: string;
    description: string;
};

export default async function Categories() {
    async function getCategories(): Promise<Category[]> {
        return new Promise((res) => {
            const categories: Category[] = [
                {
                    id: 1,
                    name: 'Road Bikes',
                    description:
                        'Lightweight bikes built for speed on paved roads.',
                },
                {
                    id: 2,
                    name: 'Mountain Bikes',
                    description: 'Durable bikes designed for off-road trails.',
                },
                {
                    id: 3,
                    name: 'City Bikes',
                    description: 'Comfortable bikes ideal for urban commuting.',
                },
                {
                    id: 4,
                    name: 'Hybrid Bikes',
                    description:
                        'Versatile bikes suitable for both road and light trails.',
                },
                {
                    id: 5,
                    name: 'Electric Bikes',
                    description:
                        'Bikes with electric assist for easier riding.',
                },
            ];

            setTimeout(() => res(categories), 1500);
        });
    }

    const categories = await getCategories();

    return (
        <Group grow>
            {categories.map(({ id, name, description }) => (
                <div key={id} className="border p-2 mb-2">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            ))}
        </Group>
    );
}
