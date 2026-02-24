import { Group, Text } from '@mantine/core';

interface Props {
    total: number;
}

export default function CartTotal({ total }: Props) {
    return (
        <Group justify="space-between" p="lg" bg="gray.4" bdrs="sm">
            <Text>До сплати</Text>

            <Text>{`₴${total}`}</Text>
        </Group>
    );
}
