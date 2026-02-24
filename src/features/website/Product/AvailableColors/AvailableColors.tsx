'use client';

interface Props {
    preselectedColor?: string;
    updateCartItem: UpdateCartItem;
    colors: string[];
}

import { useEffect, useState } from 'react';

import { CheckIcon, Flex, Group, Text } from '@mantine/core';

import type { UpdateCartItem } from '@/shared/hooks/useCartItem';

import styles from '../styles/product.module.scss';

export default function AvailableColors({
    preselectedColor,
    colors,
    updateCartItem,
}: Props) {
    const [selectedColor, setSelectedColor] = useState<string | null>(
        preselectedColor || null
    );

    useEffect(() => {
        if (selectedColor) {
            updateCartItem('color', selectedColor);
        }
    }, [selectedColor]);

    return (
        <Flex
            className={styles.productAvailableColorsContainer}
            justify="space-between"
        >
            <Text className={styles.productContentContainer__paragraph}>
                Колір:
            </Text>

            <Group gap="12px">
                {colors.map((color) => (
                    <Flex
                        justify="center"
                        align="center"
                        key={color}
                        bg={color}
                        bdrs="50%"
                        bd={color === 'white' ? '1px solid gray.5' : 'none'}
                        onClick={() => setSelectedColor(color)}
                        className={
                            styles.productAvailableColorsContainer__colorSelector
                        }
                    >
                        {selectedColor === color && (
                            <CheckIcon
                                color={color === 'white' ? 'black' : 'white'}
                                className={
                                    styles.productAvailableColorsContainer__colorSelector__checkIcon
                                }
                            />
                        )}
                    </Flex>
                ))}
            </Group>
        </Flex>
    );
}
