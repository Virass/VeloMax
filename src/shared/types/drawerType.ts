import type { ComponentType, ReactNode } from 'react';

import { type DrawerProps as MantineDrawerProps } from '@mantine/core';

export interface DrawerProps
    extends Omit<MantineDrawerProps, 'opened' | 'onClose'> {
    title?: string;
    isOpened?: boolean;
    close?: () => void;
    CustomButton?: ComponentType<{ onClick: () => void }>;
    targetButtonTitle?: string;
    children: ReactNode;
}
