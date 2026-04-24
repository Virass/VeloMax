import type { ReactNode } from 'react';

import { Divider, Menu as MantineMenu, type MenuProps } from '@mantine/core';
import Link from 'next/link';

import { Button } from './Button';

export interface MenuItem {
    label: string;
    link?: string;
    icon?: ReactNode;
    action?: () => void;
}

interface Props extends MenuProps {
    items: MenuItem[];
    targetButton?: ReactNode;
}

export default function Menu({ items, targetButton, ...rest }: Props) {
    return (
        <MantineMenu {...rest}>
            <MantineMenu.Target>
                {targetButton ? targetButton : <Button>Toggle</Button>}
            </MantineMenu.Target>

            <MantineMenu.Dropdown>
                {items.map((item) => (
                    <MantineMenu.Item
                        key={item.label}
                        leftSection={item.icon}
                        onClick={item.action}
                        component={(item.link ? Link : 'button') as 'button'}
                        {...(item.link ? { href: item.link } : {})}
                    >
                        {item.label}
                    </MantineMenu.Item>
                ))}
            </MantineMenu.Dropdown>
        </MantineMenu>
    );
}
