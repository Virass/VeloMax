import { Group } from '@mantine/core';
import { getProducts } from './services/products.service';

export default async function Products() {
    const products = await getProducts();

    return (
        <Group grow>
            {products.map(({ id, name, brand, price, category }) => (
                <div key={id}>
                    <h2>{name}</h2>
                    <p>Brand: {brand}</p>
                    <p>Category: {category}</p>
                    <p>Price: ${price}</p>
                </div>
            ))}
        </Group>
    );
}
