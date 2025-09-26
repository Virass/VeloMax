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

import { Button } from './Button';
import CardPrice from './ProductCardPrice';
import { website } from '../constants/urls';

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

                <Stack w={306}>
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

                    <Text c="gray.6">{`${availability ? 'є' : 'немає'} в наявності`}</Text>

                    <Button
                        radius="lg"
                        bg={`gray.${availability ? '9' : '2'}`}
                        disabled={!availability}
                        c={availability ? 'white' : 'gray.5'}
                        w="100%"
                        size="lg"
                    >
                        <Text size="18px">Додати до кошика</Text>
                    </Button>
                </Stack>
            </Flex>
        </MantineCard>
    );
}
