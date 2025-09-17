import { Box, Group, Text } from '@mantine/core';

interface Props {
    price: number;
}

export default function ProductCardPrice({ price }: Props) {
    return (
        <Group
            gap="3px"
            p="0 10px"
            bd="1px solid gray.3"
            bdrs="lg"
            align="center"
        >
            <Box w={6} h={6} bdrs="50%" bg="gray.7" />

            <Text c="gray.9" fw="bold">
                {price} UAH
            </Text>
        </Group>
    );
}
