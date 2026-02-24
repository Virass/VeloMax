import { Flex } from '@mantine/core';
import { notFound } from 'next/navigation';

import { inter } from '@/app/layout';

import { ProductContent } from './ProductContent';
import { Reviews } from '../Reviews';
import { getProduct } from './services/product.service';
import styles from './styles/product.module.scss';

interface Props {
    id: string;
}

export default async function Product({ id }: Props) {
    const product = await getProduct(id);

    if (!product) {
        notFound();
    }

    return (
        <Flex className={styles.productContainer}>
            <ProductContent product={product} customFont={inter} />

            <Reviews productId={product.id} />
        </Flex>
    );
}
