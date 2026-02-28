'use client';

interface Props {
    preselectedColor?: string;
    itemId: string;
    colors: string[];
}

import { useEffect, useState } from 'react';

import { CheckIcon, Flex, Group, Text } from '@mantine/core';

import { useAppStore } from '@/core/store/store';

import styles from '../styles/product.module.scss';

export default function AvailableColors({
    preselectedColor,
    colors,
    itemId,
}: Props) {
    const [selectedColor, setSelectedColor] = useState<string | null>(
        preselectedColor || null
    );
    const updateItemField = useAppStore(
        (state) => state.shoppingCart.updateItemField
    );

    useEffect(() => {
        if (selectedColor) {
            updateItemField(itemId, 'color', selectedColor);
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
