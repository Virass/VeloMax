import { Group, Text } from '@mantine/core';

interface Props {
    price: number;
    discountPrice?: number;
}

export default function Price({ price, discountPrice }: Props) {
    return (
        <Group gap="3px">
            <Text
                c="gray.6"
                fw="700"
                fz="20px"
                td={discountPrice ? 'line-through' : 'none'}
            >
                {price} UAH
            </Text>
            {discountPrice && (
                <Text c="red.9" fw="700" fz="20px">
                    {discountPrice} UAH
                </Text>
            )}
        </Group>
    );
}
