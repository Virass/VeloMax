import { Box, Stack, Text, Title } from '@mantine/core';
import Link from 'next/link';

import { website } from '../constants/urls';

export default function EmptyCart() {
    const { products } = website;

    return (
        <Stack
            gap="20px"
            p="50px"
            bdrs="lg"
            bg="gray.2"
            justify="center"
            align="center"
        >
            <Title order={3}>Кошик порожній</Title>

            <Box>
                <Text ta="center"> У твоєму кошику поки що немає товарів.</Text>
                <Text ta="center">
                    Повернись до покупок і знайди щось цікаве!
                </Text>
            </Box>

            <Title order={4}>Шукаєш щось особливе?</Title>
            <Text>
                Переглянь наш{' '}
                <Link href={products} style={{ textDecoration: 'none' }}>
                    <Text span c="blue.5">
                        каталог
                    </Text>
                </Link>
            </Text>
        </Stack>
    );
}
