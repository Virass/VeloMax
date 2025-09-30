'use client';

import { useState } from 'react';

import { Group, NumberInput, Text } from '@mantine/core';

import { Button } from '@/shared/components/Button';
import MinusIcon from '@/shared/ui/icons/MinusIcon';
import PlusIcon from '@/shared/ui/icons/PlusIcon';

import styles from '../styles/product.module.scss';

interface Props {
    maxQuantity: number | string;
}

export default function QuantitySelection({ maxQuantity }: Props) {
    const [localQuantity, setLocalQuantity] = useState<string | number>('');

    const increment = () => {
        setLocalQuantity((prev) => Number(prev) + 1);
    };

    const decrement = () => {
        setLocalQuantity((prev) => Number(prev) - 1);
    };

    return (
        <Group
            className={styles.productContentContainer}
            justify="space-between"
        >
            <Text>Кількість:</Text>

            <Group gap="12px">
                <Button variant="invisible" onClick={decrement}>
                    <MinusIcon color="gray.6" />
                </Button>
                <NumberInput
                    value={localQuantity}
                    onChange={setLocalQuantity}
                    placeholder="0"
                    w="42px"
                    fz="14px"
                    hideControls
                    max={typeof maxQuantity === 'string' ? 99 : maxQuantity}
                    styles={{
                        input: { textAlign: 'center' },
                    }}
                />

                <Button variant="invisible" onClick={increment}>
                    <PlusIcon color="gray.6" />
                </Button>
            </Group>
        </Group>
    );
}
