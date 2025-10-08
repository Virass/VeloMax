'use client';

interface Props {
    colors: string[];
}

import { useState } from 'react';

import { CheckIcon, Flex, Group, Text } from '@mantine/core';

import styles from '../styles/product.module.scss';

export default function AvailableColors({ colors }: Props) {
    const [selectedColor, setSelectedColor] = useState<string | null>(null);

    const selectColor = (color: string) => {
        setSelectedColor(color);
    };

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
                        onClick={() => selectColor(color)}
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
