import { type Category } from '@/shared/types/category';

export async function getCategories(): Promise<Category[]> {
    return new Promise((resolve) => {
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
                description: 'Bikes with electric assist for easier riding.',
            },
        ];

        setTimeout(() => resolve(categories), 1500);
    });
}
