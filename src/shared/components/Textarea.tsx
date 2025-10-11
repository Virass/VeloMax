'use client';

import {
    type TextareaProps,
    type MantineSize,
    Textarea as MantineTextArea,
} from '@mantine/core';

interface Props extends TextareaProps {
    size?: MantineSize;
    width?: number | string;
    rounded?: boolean;
}

export function Textarea({
    size = 'sm',
    width = '100%',
    rounded = false,
    ...rest
}: Props) {
    return (
        <MantineTextArea
            size={size}
            w={width}
            radius={rounded ? 'xl' : 'sm'}
            {...rest}
        />
    );
}
