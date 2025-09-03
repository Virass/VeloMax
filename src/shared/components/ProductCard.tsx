import {
    Box,
    Flex,
    Group,
    Card as MantineCard,
    Stack,
    Text,
} from '@mantine/core';
import Image from 'next/image';

import { Button } from './Button';
import CardPrice from './ProductCardPrice';

interface Props {
    /*  Please REMOVE THIS comment once you start working with this component

        Note: This component is not adaptive by default.
        Some parts of the application require rendering in a column layout on both mobile and desktop.
        To add responsiveness, handle it inside specific components. For example:

        const isMobile = useResponsive();

        <Card
          title="Колесо"
          price={100}
          availability={false}
          cardDirection={isMobile ? "column" : "row"}
        />
    */

    cardDirection?: 'row' | 'column';
    image?: string; // should be mandatory once images are ready
    title: string;
    price: number;
    availability: boolean;
}

export default function ProductCard({
    cardDirection = 'column',
    // for example purposes
    image = 'https://customwheelbuilder.com/cdn/shop/products/Screenshot2021-08-139.36.38AM_4337d2e9-b2d8-40f3-9d1d-1e06813ae497_540x.png?v=1628878170',
    title,
    price,
    availability,
}: Props) {
    return (
        <MantineCard withBorder shadow="sm" padding="lg" radius="md">
            <Flex
                direction={cardDirection}
                justify={
                    cardDirection === 'row' ? 'space-between' : 'flex-start'
                }
                gap={cardDirection === 'row' ? undefined : 'lg'}
            >
                <Box mx={cardDirection === 'column' ? 'auto' : undefined}>
                    <Image
                        src={image}
                        height={160}
                        width={200}
                        alt={`${title} image`}
                    />
                </Box>

                <Stack>
                    <Group justify="space-between">
                        <Text fw="bold">{title}</Text>

                        <CardPrice price={price} />
                    </Group>

                    <Text
                        c={`${availability ? 'gray' : 'red'}.6`}
                    >{`${availability ? 'є' : 'немає'} в наявності`}</Text>

                    <Button radius="lg" bg="gray.9" c="white">
                        Додати до кошика
                    </Button>
                </Stack>
            </Flex>
        </MantineCard>
    );
}
