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
    type?: 'button' | 'submit' | 'reset';
    children: ReactNode;
}

export function Button({
    leftIcon,
    rightIcon,
    type = 'button',
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
            type={type}
            leftSection={leftIcon}
            rightSection={rightIcon}
            {...rest}
        />
    );
}
