'use client';

import { useEffect, useState } from 'react';

import { Box, Flex, Stack, Title } from '@mantine/core';
import Link from 'next/link';

import type { CartItem } from '@/core/store/shoppingCartSlice';
import { Button } from '@/shared/components/Button';
import { QuantitySelection } from '@/shared/components/QuantitySelection';
import { website } from '@/shared/constants/urls';

import { AvailableColors } from '../Product/AvailableColors';
import { Price } from '../Product/Price';
import { ProductImageGallery } from '../ProductImageGallery';
import styles from '../ShoppingCart/styles/shoppingCart.module.scss';

interface Props {
    item: CartItem;
    quantity: number;
    updateQuantity: (quantity: number) => void;
    closeModal: () => void;
}

export default function EditCartItemContent({
    item,
    quantity,
    updateQuantity,
    closeModal,
}: Props) {
    const { name, price, discountPrice, imagesUrls, id, colors, color } = item;
    const [localQuantity, setLocalQuantity] = useState(quantity);

    useEffect(() => {
        const originalOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = originalOverflow;
        };
    }, []);

    const applyNewChanges = () => {
        updateQuantity(localQuantity);

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
                            itemId={item.id}
                        />
                    )}

                    <QuantitySelection
                        item={item}
                        quantity={localQuantity}
                        setQuantity={setLocalQuantity}
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
