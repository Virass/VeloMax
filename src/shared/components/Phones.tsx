import {
    Anchor,
    Group,
    type MantineColor,
    type MantineFontSize,
    Stack,
} from '@mantine/core';

import { phonesExample } from '@/shared/constants/mockData';
import { formatPhoneNumber } from '@/shared/lib/formatPhoneNumber';
import { PhoneIcon } from '@/shared/ui/icons/PhoneIcon';

type Props = {
    color?: MantineColor;
    fontSize?: MantineFontSize | string | number;
    fontWeight?: number;
    align?: 'flex-start' | 'center' | 'flex-end';
    iconSize?: 12 | 24 | 32;
};

export const Phones = ({
    color = '#000000',
    fontSize = 'lg',
    fontWeight = 400,
    align = 'flex-start',
    iconSize = 32,
}: Props) => (
    <Group align={align} gap="sm">
        <PhoneIcon width={iconSize} height={iconSize} color={color} />

        <Stack gap="0.3">
            {phonesExample.map((phone) => (
                <Anchor
                    key={phone}
                    href={`tel:${phone}`}
                    style={{
                        color,
                        fontSize,
                        fontWeight,
                        lineHeight: '160%',
                        textDecoration: 'none',
                    }}
                >
                    {formatPhoneNumber(phone)}
                </Anchor>
            ))}
        </Stack>
    </Group>
);
