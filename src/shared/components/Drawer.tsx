'use client';

import type { ComponentType, ReactNode } from 'react';

import {
    Drawer as MantineDrawer,
    type DrawerProps as MantineDrawerProps,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

import { Button } from './Button';

interface Props extends Omit<MantineDrawerProps, 'opened' | 'onClose'> {
    title: string;
    CustomButton?: ComponentType<{ onClick: () => void }>;
    targetButtonTitle?: string;
    children: ReactNode;
}

export default function Drawer({
    title,
    CustomButton,
    targetButtonTitle,
    children,
    ...rest
}: Props) {
    const [opened, { open, close }] = useDisclosure(false);

    return (
        <>
            <MantineDrawer
                opened={opened}
                onClose={close}
                title={title}
                {...rest}
            >
                {children}
            </MantineDrawer>

            {CustomButton ? (
                <CustomButton onClick={open} />
            ) : (
                <Button onClick={open}>
                    <p>{targetButtonTitle}</p>
                </Button>
            )}
        </>
    );
}
