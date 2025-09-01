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
        icon: <ShoppingBagIcon />,
    },
    {
        href: NAV_LINKS.profile.href,
        ariaLabel: 'Особистий кабінет',
        icon: <UserIcon />,
    },
];

export const Actions = () => (
    <Group gap="md">
        {actions.map((action) => (
            <Link
                href={action.href}
                aria-label={action.ariaLabel}
                key={action.href}
            >
                <ActionIcon size="lg" variant="transparent">
                    {action.icon}
                </ActionIcon>
            </Link>
        ))}
    </Group>
);
