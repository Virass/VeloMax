import { Group } from '@mantine/core';

import type { Product } from '@/shared/types/product';

import { getProducts } from './services/products.service';
import { filterByQuery } from '@/shared/lib/filterByQuery';

export default async function Products({ query }: { query: string }) {
    const products = await getProducts();

    const filteredProducts = filterByQuery<Product>(
        products,
        query,
        (p) => p.name
    );

    return (
        <Group grow>
            {filteredProducts.map(({ id, name, brand, price, category }) => (
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
