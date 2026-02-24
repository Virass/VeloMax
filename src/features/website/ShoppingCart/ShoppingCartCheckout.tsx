'use client';

import { useState } from 'react';

import { Group, Stack, Text, Title } from '@mantine/core';

import { Button } from '@/shared/components/Button';
import CheckoutActionButtons from '@/shared/components/CheckoutActionButtons';
import { Input } from '@/shared/components/Input';
import { website } from '@/shared/constants/urls';

import styles from '../ShoppingCart/styles/shoppingCart.module.scss';

interface Props {
    totalPrice: number;
    totalSavings: number;
    inShoppingCart?: boolean;
}

export default function ShoppingCartCheckout({
    totalPrice,
    totalSavings,
    inShoppingCart,
}: Props) {
    // TODO fetch shipping price from somewhere
    const shippingPrice = 100;
    const [promoCode, setPromoCode] = useState('');

    return (
        <Stack>
            <Stack
                className={inShoppingCart ? styles.shoppingCart__summary : ''}
            >
                <Title
                    c="gray.8"
                    className={styles.shoppingCart__summary__border}
                >
                    Підсумок замовлення
                </Title>

                <Stack className={styles.shoppingCart__summary__border}>
                    <Group justify="space-between">
                        <Text>Проміжна сума:</Text>
                        <Text>{`₴${totalPrice}`}</Text>
                    </Group>
                    <Group justify="space-between">
                        <Text>Орієнтовна доставка:</Text>
                        <Text>{`₴${shippingPrice}`}</Text>
                    </Group>
                </Stack>

                <Group
                    className={styles.shoppingCart__summary__border}
                    justify="space-between"
                >
                    <Title c="gray.8">Разом:</Title>
                    <Title c="gray.8">{`₴${totalPrice + shippingPrice}`}</Title>
                </Group>

                <CheckoutActionButtons
                    buttons={[
                        {
                            name: 'Сплатити зараз',
                            href: '#',
                            customColor: 'gray.9',
                            customTextColor: 'white',
                        },
                        {
                            name: 'Перейти до товарів',
                            href: website.products,
                        },
                    ]}
                />

                <Group>
                    <Text fz="h3" c="gray.8" fw={600}>
                        Сьогодні ви заощаджуєте:
                    </Text>

                    <Text
                        fz="h3"
                        fw={700}
                        c="green.9"
                    >{`₴${totalSavings}`}</Text>
                </Group>
            </Stack>

            <Stack
                className={inShoppingCart ? styles.shoppingCart__summary : ''}
            >
                <Title c="gray.8">Промо код</Title>

                <form>
                    <Group justify="space-between">
                        <Input
                            maw="350px"
                            value={promoCode}
                            onChange={(e) => setPromoCode(e.target.value)}
                            placeholder="Ваш промокод..."
                        />

                        <Button type="submit">Застосувати</Button>
                    </Group>
                </form>
            </Stack>
        </Stack>
    );
}
