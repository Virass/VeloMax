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
        <Group
            className={styles.productContentContainer}
            justify="space-between"
        >
            <Text>Колір:</Text>

            <Group gap="12px">
                {colors.map((color) => (
                    <Flex
                        w="24px"
                        h="24px"
                        justify="center"
                        align="center"
                        key={color}
                        bg={color}
                        bdrs="50%"
                        bd={color === 'white' ? '1px solid gray.5' : 'none'}
                        onClick={() => selectColor(color)}
                    >
                        {selectedColor === color && (
                            <CheckIcon
                                color={color === 'white' ? 'black' : 'white'}
                                width="8px"
                                height="6px"
                            />
                        )}
                    </Flex>
                ))}
            </Group>
        </Group>
    );
}
