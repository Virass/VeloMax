import { Group, Stack, Text } from '@mantine/core';
import { PhoneIcon } from '@/shared/ui/icons/PhoneIcon';
import type { MantineColor, MantineFontSize } from '@mantine/core';

type Props = {
    phones: string[];
    color: MantineColor;
    fontSize: MantineFontSize;
    fontWeight: number;
    align?: 'flex-start' | 'center' | 'flex-end';
    iconSize: 12 | 24 | 32;
};

export const Phones = ({
    phones,
    color,
    fontSize,
    fontWeight,
    align = 'flex-start',
    iconSize,
}: Props) => {
    const formatPhoneNumber = (phone: string): string => {
        const digits = phone.replace(/\D/g, '');

        if (digits.startsWith('380') && digits.length === 12) {
            return digits.replace(
                /^380(\d{2})(\d{3})(\d{2})(\d{2})$/,
                '+380 $1 $2 $3 $4'
            );
        }

        if (digits.startsWith('0') && digits.length === 10) {
            return digits.replace(
                /^0(\d{2})(\d{3})(\d{2})(\d{2})$/,
                '+380 $1 $2 $3 $4'
            );
        }

        return phone;
    };

    return (
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
};
