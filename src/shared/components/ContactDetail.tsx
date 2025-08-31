import type { ReactNode } from 'react';

import { Group, Stack, Text } from '@mantine/core';

interface ContactDetailProps {
    icon: ReactNode;
    contactInfo: string[];
    size?: 'sm' | 'md' | 'lg';
}

export default function ContactDetail({
    icon,
    contactInfo,
    size = 'lg',
}: ContactDetailProps) {
    return (
        <Group align="flex-start" gap="xs">
            {icon}

            <Stack gap="xs">
                {contactInfo.map((info) => (
                    <Text key={info} size={size}>
                        {info}
                    </Text>
                ))}
            </Stack>
        </Group>
    );
}
