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
    variant?: MantineButtonProps['variant'] | 'invisible';
}

const invisibleProps: Partial<MantineButtonProps> = {
    variant: 'subtle',
    px: 0,
    py: 0,
    c: 'inherit',
    fw: 'inherit',
    styles: {
        root: {
            border: 'none',
            background: 'transparent',
            '&:hover': { background: 'transparent' },
        },
    },
};

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
    const appliedProps =
        variant === 'invisible' ? { ...invisibleProps } : { variant };

    return (
        <MantineButton
            fullWidth={fullWidth}
            variant={variant}
            onClick={onClick}
            justify={justify}
            type={type}
            leftSection={leftIcon}
            rightSection={rightIcon}
            {...appliedProps}
            {...rest}
        />
    );
}
