'use client';

import { List, ThemeIcon } from '@mantine/core';

import CheckmarkIcon from '@/shared/ui/icons/CheckmarkIcon';

export default function ListOfAdvantages() {
    const authFeatures = [
        'Відстежуйте замовлення',
        'Оформлюйте замовлення швидше',
        'Зберігайте кілька адрес',
        'Зберігайте улюблені товари',
        'Та багато іншого!',
    ];

    return (
        <List
            spacing="xs"
            size="sm"
            center
            icon={
                <ThemeIcon
                    radius="xl"
                    variant="outline"
                    size={24}
                    style={{
                        borderColor: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <CheckmarkIcon width={12} height={12} color="white" />
                </ThemeIcon>
            }
        >
            {authFeatures.map((feature) => (
                <List.Item key={feature}>{feature}</List.Item>
            ))}
        </List>
    );
}
