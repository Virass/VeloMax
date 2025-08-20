'use client';

import type { ReactNode } from 'react';

import {
    Button as MantineButton,
    type ButtonProps as MantineButtonProps,
} from '@mantine/core';

interface Props extends MantineButtonProps {
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
    onClick?: () => void;
    children: ReactNode;
}

export function Button({
    leftIcon,
    rightIcon,
    fullWidth,
    onClick,
    variant = 'default',
    justify = 'center',
    ...rest
}: Props) {
    return (
        <MantineButton
            fullWidth={fullWidth}
            variant={variant}
            onClick={onClick}
            justify={justify}
            leftSection={leftIcon}
            rightSection={rightIcon}
            {...rest}
        />
    );
}
