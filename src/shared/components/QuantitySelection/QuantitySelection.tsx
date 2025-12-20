'use client';

import { useEffect, useState } from 'react';

import { Flex, Group, NumberInput, Text } from '@mantine/core';

import type { CartItem } from '@/core/store/ShoppingCartSlice';
import { Button } from '@/shared/components/Button';
import type { UpdateCartItem } from '@/shared/hooks/useCartItem';
import type { SetState } from '@/shared/types/tsHelpersTypes';
import MinusIcon from '@/shared/ui/icons/MinusIcon';
import PlusIcon from '@/shared/ui/icons/PlusIcon';

import styles from './quantitySelection.module.scss';

interface Props {
    item: CartItem;
    direction?: 'row' | 'column';
    quantity: number;
    setQuantity: SetState<number>;
    updateCartItem: UpdateCartItem;
}

export default function QuantitySelection({
    item,
    direction,
    quantity,
    setQuantity,
    updateCartItem,
}: Props) {
    const [localQuantity, setLocalQuantity] = useState(quantity);

    useEffect(() => {
        if (updateCartItem) {
            updateCartItem('quantity', localQuantity);
        }
    }, [localQuantity]);

    const increment = () => {
        setLocalQuantity((prev) => prev + 1);
        setQuantity((prev) => prev + 1);
    };

    const decrement = () => {
        setLocalQuantity((prev) => (prev === 1 ? prev : prev - 1));
        setQuantity((prev) => (prev === 1 ? prev : prev - 1));
    };

    return (
        <Flex
            className={styles.productQuantitySelectionContainer}
            direction={direction}
            gap="md"
        >
            <Text
                className={styles.productQuantitySelectionContainer__paragraph}
            >
                Кількість:
            </Text>

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
                    onChange={(value) => setQuantity(Number(value))}
                    placeholder="1"
                    hideControls
                    min={1}
                    max={typeof item.amount === 'string' ? 99 : item.amount}
                    styles={{
                        input: { textAlign: 'center' },
                    }}
                    className={styles.productQuantitySelectionContainer__input}
                />

                <Button variant="invisible" onClick={increment}>
                    <PlusIcon color="gray.6" />
                </Button>
            </Group>
        </Flex>
    );
}
