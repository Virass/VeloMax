import { Stack, Text } from '@mantine/core';

const policy = [
    'Згода на обробку персональних даних',
    'Політика конфіденційності',
    'Всі права захищені, © 2025',
];

export default function FooterPolicy() {
    return (
        <Stack justify="center" align="center" gap="xs">
            {policy.map((text) => (
                <Text key={text} size="xs">
                    {text}
                </Text>
            ))}
        </Stack>
    );
}
