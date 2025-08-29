import { Group } from '@mantine/core';

import { filterByQuery } from '@/shared/lib/filterByQuery';
import type { Product } from '@/shared/types/productType';

import { getProducts } from './services/products.service';

export default async function Products({ query }: { query: string }) {
    const products = await getProducts();

    const filteredProducts = filterByQuery<Product>(
        products,
        query,
        (product) => product.name
    );

    return (
        <Group grow>
            {filteredProducts.map(({ id, name, brand, price, categoryId }) => (
                <div key={id}>
                    <h2>{name}</h2>
                    <p>Brand: {brand}</p>
                    <p>Category ID: {categoryId}</p>
                    <p>Price: ${price}</p>
                </div>
            ))}
        </Group>
    );
}
