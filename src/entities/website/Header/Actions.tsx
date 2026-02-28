'use client';

import React from 'react';

import { ActionIcon, Group } from '@mantine/core';
import Link from 'next/link';

import { ClientOnly } from '@/shared/components/ClientOnly';
import { website } from '@/shared/constants/urls';
import { useCartTotals } from '@/shared/hooks/useCartTotals';
import { ShoppingBagIcon } from '@/shared/ui/icons/ShoppingBagIcon';
import { UserIcon } from '@/shared/ui/icons/UserIcon';
import CartCount from '@/widgets/website/Header/CartCount';

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

export const Actions = () => {
    const { totalQuantity } = useCartTotals();

    return (
        <Group gap={24} flex={1} justify="end">
            {actions.map((action) => (
                <Link
                    href={action.href}
                    aria-label={action.ariaLabel}
                    key={action.href}
                    style={{ position: 'relative' }}
                >
                    <ActionIcon size={24} variant="transparent">
                        {action.icon}
                    </ActionIcon>

                    <ClientOnly>
                        {action.href === website.cart && totalQuantity > 0 && (
                            <CartCount
                                cartItemCount={totalQuantity}
                                topRightCornerPlacement
                            />
                        )}
                    </ClientOnly>
                </Link>
            ))}
        </Group>
    );
};
