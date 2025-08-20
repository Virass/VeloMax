'use client';

import { type ReactNode } from 'react';

import {
    type TextInputProps,
    TextInput,
    type MantineSize,
} from '@mantine/core';

interface Props extends TextInputProps {
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
    size?: MantineSize;
    width?: number | string;
    rounded?: boolean;
}

export function Input({
    leftIcon,
    rightIcon,
    size = 'sm',
    width = '100%',
    rounded = false,
    ...rest
}: Props) {
    return (
        <TextInput
            size={size}
            w={width}
            radius={rounded ? 'xl' : 'sm'}
            leftSection={leftIcon}
            rightSection={rightIcon}
            {...rest}
        />
    );
}
