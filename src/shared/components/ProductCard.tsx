import {
    Box,
    Flex,
    Group,
    Card as MantineCard,
    Stack,
    Text,
} from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';

import AddToCartButton from './AddToCartButton';
import CardPrice from './ProductCardPrice';
import { website } from '../constants/urls';
import { getProductAvailabilityText } from '../lib/getProductAvailabilityText';

interface Props {
    cardDirection?: 'row' | 'column';
    image?: string; // should be mandatory once images are ready
    title: string;
    price: number;
    productId: string;
    availability: boolean;
}

export default function ProductCard({
    cardDirection = 'column',
    // for example purposes
    image = 'https://customwheelbuilder.com/cdn/shop/products/Screenshot2021-08-139.36.38AM_4337d2e9-b2d8-40f3-9d1d-1e06813ae497_540x.png?v=1628878170',
    title,
    price,
    productId,
    availability,
}: Props) {
    const productUrl = `${website.products}/${productId}`;

    return (
        <MantineCard withBorder shadow="sm" padding="lg" radius="md">
            <Flex
                direction={cardDirection}
                justify={
                    cardDirection === 'row' ? 'space-between' : 'flex-start'
                }
                gap={cardDirection === 'row' ? undefined : 'lg'}
                align={cardDirection === 'column' ? 'center' : 'flex-start'}
            >
                <Box mx="auto">
                    <Link href={productUrl}>
                        <Image
                            src={image}
                            height={160}
                            width={200}
                            alt={`${title} image`}
                        />
                    </Link>
                </Box>

                <Stack w={270}>
                    <Group justify="space-between">
                        <Link
                            href={productUrl}
                            style={{ textDecoration: 'none' }}
                        >
                            <Text fw="bold" c="gray.9">
                                {title}
                            </Text>
                        </Link>

                        <CardPrice price={price} />
                    </Group>

                    <Text c="gray.6">
                        {getProductAvailabilityText(availability)}
                    </Text>

                    <AddToCartButton availability={availability} />
                </Stack>
            </Flex>
        </MantineCard>
    );
}
