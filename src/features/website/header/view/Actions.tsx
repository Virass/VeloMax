import React from 'react';

import { ActionIcon, Group } from '@mantine/core';
import Link from 'next/link';

import { NAV_LINKS } from '@/shared/constants/urls';
import { ShoppingBagIcon } from '@/shared/ui/icons/ShoppingBagIcon';
import { UserIcon } from '@/shared/ui/icons/UserIcon';

interface Action {
    href: string;
    ariaLabel: string;
    icon: React.ReactNode;
}

const actions: Action[] = [
    {
        href: NAV_LINKS.cart.href,
        ariaLabel: 'Кошик',
        icon: <ShoppingBagIcon width={20} height={20} />,
    },
    {
        href: NAV_LINKS.profile.href,
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
