'use client';

import { Flex, Group, NumberInput, Text } from '@mantine/core';

import type { CartItem } from '@/core/store/shoppingCartSlice';
import { useAppStore } from '@/core/store/store';
import { Button } from '@/shared/components/Button';
import type { SetState } from '@/shared/types/tsHelpersTypes';
import MinusIcon from '@/shared/ui/icons/MinusIcon';
import PlusIcon from '@/shared/ui/icons/PlusIcon';

import styles from './quantitySelection.module.scss';

interface Props {
    item: CartItem;
    direction?: 'row' | 'column';
    quantity: number;
    instantSelection?: boolean;
    setQuantity: SetState<number>;
    label?: boolean;
}

export default function QuantitySelection({
    item,
    direction,
    quantity,
    setQuantity,
    instantSelection = false,
    label = true,
}: Props) {
    const updateQuantity = useAppStore(
        (state) => state.shoppingCart.updateQuantity
    );

    const increment = () => {
        if (instantSelection) {
            updateQuantity(item.id, quantity + 1);
        }

        setQuantity((prev) => prev + 1);
    };

    const decrement = () => {
        if (instantSelection) {
            updateQuantity(item.id, quantity - 1);
        }

        setQuantity((prev) => (prev === 1 ? prev : prev - 1));
    };

    return (
        <Flex
            className={styles.productQuantitySelectionContainer}
            direction={direction}
            gap="md"
        >
            {label && (
                <Text
                    className={
                        styles.productQuantitySelectionContainer__paragraph
                    }
                >
                    Кількість:
                </Text>
            )}

            <Group
                className={
                    styles.productQuantitySelectionContainer__quantitySelection
                }
            >
                <Button variant="invisible" onClick={decrement}>
                    <MinusIcon color="gray.6" />
                </Button>
                <NumberInput
                    value={quantity}
                    onChange={(value) => setQuantity(Number(value))}
                    placeholder={quantity.toString()}
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
