import { Flex } from '@mantine/core';

import { Carousel } from '../Carousel';
import { getProduct } from './services/product.service';
import styles from './styles/product.module.scss';

interface Props {
    id: string;
}

export default async function Product({ id }: Props) {
    const product = await getProduct(id);

    return (
        <Flex className={styles.productContainer}>
            <Carousel images={product?.imagesUrls ?? []} />

            <div>
                <div>
                    <div>
                        {/* product information (title, price, description) */}
                    </div>

                    <div>{/* color */}</div>

                    <div>{/* quantity */}</div>
                </div>

                <div>{/* add to the cart button */}</div>
            </div>

            <div>{/* product description */}</div>

            <div>{/* reviews */}</div>
        </Flex>
    );
}
