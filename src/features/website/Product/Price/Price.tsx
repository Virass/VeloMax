import { Group, Text } from '@mantine/core';

interface Props {
    price: number;
    discountPrice?: number;
    small?: boolean;
}

import styles from '../styles/product.module.scss';

export default function Price({ price, discountPrice, small }: Props) {
    return (
        <Group gap={small ? '3px' : '10px'}>
            <Text
                c="gray.7"
                fw="700"
                td={discountPrice ? 'line-through' : 'none'}
                className={
                    small
                        ? styles.productContentContainer__titleSmall
                        : styles.productContentContainer__title
                }
            >
                ₴{price}
            </Text>

            {discountPrice && (
                <Text
                    c="red.9"
                    fw="700"
                    className={
                        small
                            ? styles.productContentContainer__titleSmall
                            : styles.productContentContainer__title
                    }
                >
                    ₴{discountPrice}
                </Text>
            )}
        </Group>
    );
}
