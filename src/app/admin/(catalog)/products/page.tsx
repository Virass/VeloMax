import { Group } from '@mantine/core';

type Product = {
    id: number;
    name: string;
    brand: string;
    price: number;
    category: string;
};

export default async function Products() {
    async function getProducts(): Promise<Product[]> {
        return new Promise((res) => {
            const products: Product[] = [
                {
                    id: 1,
                    name: 'Roadster 2000',
                    brand: 'SpeedX',
                    price: 499,
                    category: 'Road Bike',
                },
                {
                    id: 2,
                    name: 'Mountain King',
                    brand: 'TrailBlazer',
                    price: 799,
                    category: 'Mountain Bike',
                },
                {
                    id: 3,
                    name: 'City Cruiser',
                    brand: 'UrbanRide',
                    price: 299,
                    category: 'City Bike',
                },
                {
                    id: 4,
                    name: 'Speed Demon',
                    brand: 'Velocity',
                    price: 1200,
                    category: 'Road Bike',
                },
                {
                    id: 5,
                    name: 'Trail Blazer',
                    brand: 'AdventureCo',
                    price: 650,
                    category: 'Mountain Bike',
                },
            ];

            setTimeout(() => res(products), 2000);
        });
    }

    const products = await getProducts();

    return (
        <Group grow>
            {products.map(({ id, name, brand, price, category }) => (
                <div key={id} className="border p-2 mb-2">
                    <h2>{name}</h2>
                    <p>Brand: {brand}</p>
                    <p>Category: {category}</p>
                    <p>Price: ${price}</p>
                </div>
            ))}
        </Group>
    );
}
