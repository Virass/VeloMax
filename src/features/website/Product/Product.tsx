import { Box, Flex, Group, Stack, Text, Title } from '@mantine/core';
import { notFound } from 'next/navigation';

import { inter } from '@/app/layout';
import AddToCartButton from '@/shared/components/AddToCartButton';
import Rating from '@/shared/components/Rating';
import { getProductAvailabilityText } from '@/shared/lib/getProductAvailabilityText';

import { Carousel } from '../Carousel';
import { Price } from './Price';
import { QuantitySelection } from './QuantitySelection';
import { Reviews } from '../Reviews';
import { AvailableColors } from './AvailableColors';
import { getProduct } from './services/product.service';
import styles from './styles/product.module.scss';

interface Props {
    id: string;
}

export default async function Product({ id }: Props) {
    const product = await getProduct(id);

    if (!product) {
        notFound();
    }

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
        <Flex className={styles.productContainer}>
            <Carousel images={imagesUrls ?? []} />

            <Stack gap="12px">
                <Stack className={styles.productContentContainer}>
                    <Title
                        className={inter.className}
                        tt="uppercase"
                        fw="400"
                        fz="20px"
                        c="dark.9"
                    >
                        {name}
                    </Title>

                    <Price price={price} discountPrice={discountPrice} />

                    <Group justify="space-between">
                        <Text size="sm" c="gray.9">
                            {getProductAvailabilityText(availability)}
                        </Text>

                        <Rating readOnly value={rating} />
                    </Group>

                    {/* // TODO Maybe create 2 description values. E.g. displayDescription, description */}
                    <Text>{description?.slice(0, 124)}</Text>
                </Stack>

                {colors && <AvailableColors colors={colors} />}

                {availability && <QuantitySelection maxQuantity={amount} />}

                <AddToCartButton availability={availability} />
            </Stack>

            <Stack gap="32px">
                <Title fz="20px" c="dark.9" fw="400">
                    Опис товару
                </Title>

                <Box p="16px" bg="gray.1" bdrs="30px">
                    <Text>{description}</Text>
                </Box>
            </Stack>

            <Reviews productId={id} />
        </Flex>
    );
}
