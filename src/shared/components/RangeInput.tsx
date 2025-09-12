import type { ReactNode } from 'react';

import { type RangeSliderProps, RangeSlider } from '@mantine/core';

interface Props extends RangeSliderProps {
    defaultValue?: [number, number];
    marks?: { value: number; label?: ReactNode }[];
}

export default function RangeInput({ defaultValue, marks, ...rest }: Props) {
    return (
        <RangeSlider
            color="dark.6"
            defaultValue={defaultValue}
            marks={marks}
            {...rest}
        />
    );
}
