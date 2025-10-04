import { Group, Text } from '@mantine/core';

interface Props {
    price: number;
    discountPrice?: number;
}

import styles from '../styles/product.module.scss';

export default function Price({ price, discountPrice }: Props) {
    return (
        <Group gap="3px">
            <Text
                c="gray.6"
                fw="700"
                td={discountPrice ? 'line-through' : 'none'}
                className={styles.productContentContainer__title}
            >
                {price} UAH
            </Text>
            {discountPrice && (
                <Text
                    c="red.9"
                    fw="700"
                    className={styles.productContentContainer__title}
                >
                    {discountPrice} UAH
                </Text>
            )}
        </Group>
    );
}
