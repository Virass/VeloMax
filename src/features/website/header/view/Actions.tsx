import React from 'react';

import { ActionIcon, Group } from '@mantine/core';
import Link from 'next/link';

import { website } from '@/shared/constants/urls';
import { ShoppingBagIcon } from '@/shared/ui/icons/ShoppingBagIcon';
import { UserIcon } from '@/shared/ui/icons/UserIcon';

interface Action {
    href: string;
    ariaLabel: string;
    icon: React.ReactNode;
}

const actions: Action[] = [
    {
        href: website.cart,
        ariaLabel: 'Кошик',
        icon: <ShoppingBagIcon width={20} height={20} />,
    },
    {
        href: website.profile,
        ariaLabel: 'Особистий кабінет',
        icon: <UserIcon width={20} height={20} />,
    },
];

export const Actions = () => (
    <Group gap={24} flex={1} justify="end">
        {actions.map((action) => (
            <Link
                href={action.href}
                aria-label={action.ariaLabel}
                key={action.href}
            >
                <ActionIcon size={24} variant="transparent">
                    {action.icon}
                </ActionIcon>
            </Link>
        ))}
    </Group>
);
