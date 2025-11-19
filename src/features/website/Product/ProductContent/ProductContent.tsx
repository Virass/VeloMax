'use client';

import { Box, Flex, Stack, Text, Title } from '@mantine/core';
import type { NextFontWithVariable } from 'next/dist/compiled/@next/font';

import AddToCartButton from '@/shared/components/AddToCartButton';
import Rating from '@/shared/components/Rating';
import { useCartItem } from '@/shared/hooks/useCartItem';
import { getProductAvailabilityText } from '@/shared/lib/getProductAvailabilityText';
import type { Product } from '@/shared/types/productType';

import { ProductImageGallery } from '../../ProductImageGallery';
import { Carousel } from '../Carousel';
import { Price } from '../Price';
import ProductConfigurator from '../ProductConfigurator/ProductConfigurator';
import styles from '../styles/product.module.scss';

interface Props {
    product: Product;
    customFont: NextFontWithVariable;
}

export default function ProductContent({ product, customFont }: Props) {
    const { cartItem, updateCartItem } = useCartItem({
        ...product,
        quantity: 1,
    });

    const {
        name,
        description,
        imagesUrls,
        price,
        discountPrice,
        amount,
        colors,
        rating,
    } = product;

    const availability =
        (typeof amount === 'number' && amount > 0) || amount === 'unlimited';

    return (
        <>
            <Carousel images={imagesUrls ?? []} hiddenFrom="lg" />

            <Stack
                gap="12px"
                className={styles.productContainer__innerContainer}
            >
                <Flex gap="30px" justify="center">
                    <Box visibleFrom="lg">
                        <ProductImageGallery images={imagesUrls ?? []} />
                    </Box>

                    <Stack className={styles.productContentContainer}>
                        <Title
                            className={`${customFont.className} ${styles.productContentContainer__title}`}
                            tt="uppercase"
                        >
                            {name}
                        </Title>

                        <Box hiddenFrom="sm">
                            <Price
                                price={price}
                                discountPrice={discountPrice}
                            />
                        </Box>

                        <Flex
                            className={
                                styles.productContentContainer__productMainInfoContainer
                            }
                        >
                            <Text
                                size="sm"
                                c="gray.9"
                                className={
                                    styles.productContentContainer__paragraph
                                }
                            >
                                {getProductAvailabilityText(availability)}
                            </Text>

                            <Box visibleFrom="sm">
                                <Price
                                    price={price}
                                    discountPrice={discountPrice}
                                />
                            </Box>

                            <Rating
                                readOnly
                                value={rating}
                                classNames={{
                                    starSymbol:
                                        styles.productContentContainer__rating,
                                }}
                            />
                        </Flex>

                        {/* // TODO Maybe create 2 description values. E.g. displayDescription, description */}
                        <Text
                            className={
                                styles.productContentContainer__paragraph
                            }
                        >
                            {description?.slice(0, 124)}
                        </Text>

                        <Box visibleFrom="sm">
                            <ProductConfigurator
                                availability={availability}
                                colors={colors}
                                product={product}
                                cartItem={cartItem}
                                updateCartItem={updateCartItem}
                            />
                        </Box>
                    </Stack>
                </Flex>

                <Box hiddenFrom="sm">
                    <ProductConfigurator
                        colors={colors}
                        product={product}
                        availability={availability}
                        cartItem={cartItem}
                        updateCartItem={updateCartItem}
                    />
                </Box>

                <Box hiddenFrom="sm">
                    <AddToCartButton
                        availability={availability}
                        cartItem={cartItem}
                    />
                </Box>
            </Stack>

            <Stack
                gap="32px"
                className={styles.productContentContainer__descriptionContainer}
            >
                <Title className={styles.productContentContainer__title}>
                    Опис товару
                </Title>

                <Box
                    bg="gray.1"
                    bdrs="30px"
                    className={
                        styles.productContentContainer__paragraphContainer
                    }
                >
                    <Text className={styles.productContentContainer__paragraph}>
                        {description}
                    </Text>
                </Box>
            </Stack>
        </>
    );
}
