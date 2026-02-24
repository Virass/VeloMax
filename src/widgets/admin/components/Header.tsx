'use client';

import { AppShell, Burger, Group } from '@mantine/core';

interface Props {
    isNavbarOpen: boolean;
    toggle: () => void;
}

export default function Header({ isNavbarOpen, toggle }: Props) {
    return (
        <AppShell.Header>
            <Group h="100%" px="md">
                <Burger
                    opened={isNavbarOpen}
                    onClick={toggle}
                    hiddenFrom="sm"
                    size="sm"
                />
                Admin Panel
            </Group>
        </AppShell.Header>
    );
}
