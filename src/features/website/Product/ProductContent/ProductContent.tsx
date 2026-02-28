'use client';

import { Box, Flex, Stack, Text, Title } from '@mantine/core';
import type { NextFontWithVariable } from 'next/dist/compiled/@next/font';

import { useAppStore } from '@/core/store/store';
import AddToCartButton from '@/shared/components/AddToCartButton';
import Rating from '@/shared/components/Rating';
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

    const items = useAppStore((state) => state.shoppingCart.items);
    const cartItem = items.find((item) => item.id === product.id);

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

                        {cartItem ? (
                            <Box visibleFrom="sm">
                                <ProductConfigurator
                                    availability={availability}
                                    colors={colors}
                                    product={product}
                                    cartItem={cartItem}
                                />
                            </Box>
                        ) : (
                            <AddToCartButton
                                product={product}
                                availability={availability}
                                cartItem={cartItem}
                                w="306px"
                            />
                        )}
                    </Stack>
                </Flex>

                {cartItem && (
                    <>
                        <Box hiddenFrom="sm">
                            <ProductConfigurator
                                colors={colors}
                                cartItem={cartItem}
                                product={product}
                                availability={availability}
                            />
                        </Box>

                        <Box hiddenFrom="sm">
                            <AddToCartButton
                                availability={availability}
                                product={product}
                                cartItem={cartItem}
                            />
                        </Box>
                    </>
                )}
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
