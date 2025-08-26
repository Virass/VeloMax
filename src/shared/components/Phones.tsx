import {
    Group,
    type MantineColor,
    type MantineFontSize,
    Stack,
    Text,
} from '@mantine/core';

import { formatPhoneNumber } from '@/shared/lib/formatPhoneNumber';
import { PhoneIcon } from '@/shared/ui/icons/PhoneIcon';

type Props = {
    color?: MantineColor;
    fontSize?: MantineFontSize;
    fontWeight?: number;
    align?: 'flex-start' | 'center' | 'flex-end';
    iconSize?: 12 | 24 | 32;
};

const phones = ['+380637476963', '+380679954177'];

export const Phones = ({
    color = '#000000',
    fontSize = 'lg',
    fontWeight = 400,
    align = 'flex-start',
    iconSize = 32,
}: Props) => (
    <Group align={align} gap="xs">
        <PhoneIcon width={iconSize} height={iconSize} color={color} />

        <Stack gap="0.3">
            {phones.map((phone) => (
                <Group key={phone} gap="xs">
                    <Text c={color} size={fontSize} fw={fontWeight}>
                        {formatPhoneNumber(phone)}
                    </Text>
                </Group>
            ))}
        </Stack>
    </Group>
);
