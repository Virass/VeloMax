'use client';

import { useEffect, useState } from 'react';

import { Box, Flex, Stack, Title } from '@mantine/core';
import Link from 'next/link';

import type { CartItem } from '@/core/store/ShoppingCartSlice';
import { useAppStore } from '@/core/store/store';
import { Button } from '@/shared/components/Button';
import { QuantitySelection } from '@/shared/components/QuantitySelection';
import { website } from '@/shared/constants/urls';
import { useCartItem } from '@/shared/hooks/useCartItem';
import type { SetState } from '@/shared/types/tsHelpersTypes';

import { AvailableColors } from '../Product/AvailableColors';
import { Price } from '../Product/Price';
import { ProductImageGallery } from '../ProductImageGallery';
import styles from '../ShoppingCart/styles/shoppingCart.module.scss';

interface Props {
    item: CartItem;
    quantity: number;
    setQuantity: SetState<number>;
    closeModal: () => void;
}

export default function EditCartItemContent({
    item,
    quantity,
    setQuantity,
    closeModal,
}: Props) {
    const { name, price, discountPrice, imagesUrls, id, colors, color } = item;
    const [localQuantity, setLocalQuantity] = useState(quantity);
    const { cartItem, updateCartItem } = useCartItem(item);
    const updateItem = useAppStore((state) => state.shoppingCart.updateItem);

    useEffect(() => {
        const originalOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = originalOverflow;
        };
    }, []);

    const applyNewChanges = () => {
        setQuantity(localQuantity);

        updateItem(id, cartItem);

        closeModal();
    };

    return (
        <Stack className={styles.shoppingCart__editCartContent}>
            <Flex className={styles.shoppingCart__editCartContent__top}>
                <Box flex={1}>
                    <ProductImageGallery images={imagesUrls ?? []} minimized />
                </Box>

                <Stack h="100%" gap="50px">
                    <Stack
                        gap="3px"
                        className={styles.shoppingCart__summary__border}
                    >
                        <Link
                            href={`${website.products}/${id}`}
                            style={{ textDecoration: 'none' }}
                        >
                            <Title c="gray.8" fw={400} size="36px">
                                {name}
                            </Title>
                        </Link>

                        <Price price={price} discountPrice={discountPrice} />
                    </Stack>

                    {colors && (
                        <AvailableColors
                            preselectedColor={color}
                            colors={colors}
                            updateCartItem={updateCartItem}
                        />
                    )}

                    <QuantitySelection
                        item={item}
                        quantity={localQuantity}
                        setQuantity={setLocalQuantity}
                        updateCartItem={updateCartItem}
                        direction="row"
                    />
                </Stack>
            </Flex>

            <Button
                variant="fill"
                bg="gray.9"
                className={styles.shoppingCart__editCartContent__button}
                size="md"
                onClick={applyNewChanges}
            >
                Редагувати
            </Button>
        </Stack>
    );
}
