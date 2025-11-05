'use client';

import { useState } from 'react';

import { Box, Flex, Group, NumberInput, Text } from '@mantine/core';

import AddToCartButton from '@/shared/components/AddToCartButton';
import { Button } from '@/shared/components/Button';
import MinusIcon from '@/shared/ui/icons/MinusIcon';
import PlusIcon from '@/shared/ui/icons/PlusIcon';

import styles from '../styles/product.module.scss';

interface Props {
    maxQuantity: number | string;
    availability: boolean;
}

export default function QuantitySelection({
    maxQuantity,
    availability,
}: Props) {
    const [localQuantity, setLocalQuantity] = useState<string | number>('');

    const increment = () => {
        setLocalQuantity((prev) => Number(prev) + 1);
    };

    const decrement = () => {
        setLocalQuantity((prev) => (Number(prev) > 0 ? Number(prev) - 1 : 0));
    };

    return (
        <Flex className={styles.productQuantitySelectionContainer}>
            <Text className={styles.productContentContainer__paragraph}>
                Кількість:
            </Text>

            <Group gap="16px">
                <Group
                    className={
                        styles.productQuantitySelectionContainer__quantitySelection
                    }
                >
                    <Button variant="invisible" onClick={decrement}>
                        <MinusIcon color="gray.6" />
                    </Button>
                    <NumberInput
                        value={localQuantity}
                        onChange={setLocalQuantity}
                        placeholder="0"
                        hideControls
                        max={typeof maxQuantity === 'string' ? 99 : maxQuantity}
                        styles={{
                            input: { textAlign: 'center' },
                        }}
                        className={
                            styles.productQuantitySelectionContainer__input
                        }
                    />

                    <Button variant="invisible" onClick={increment}>
                        <PlusIcon color="gray.6" />
                    </Button>
                </Group>

                <Box visibleFrom="sm">
                    <AddToCartButton availability={availability} w="306px" />
                </Box>
            </Group>
        </Flex>
    );
}
