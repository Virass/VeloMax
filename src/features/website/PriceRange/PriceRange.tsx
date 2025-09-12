import type { RangeSliderProps } from '@mantine/core';

import RangeInput from '@/shared/components/RangeInput';

interface Props extends RangeSliderProps {
    defaultValue: [number, number];
    range: { min: number; max: number };
}

export default function PriceRange({ defaultValue, range, ...rest }: Props) {
    const marks = [
        { value: defaultValue[0], label: `${range.min} UAH` },
        { value: defaultValue[1] || 80, label: `${range.max} UAH` },
    ];

    return (
        <RangeInput
            w="370px"
            label={null}
            defaultValue={defaultValue}
            marks={marks}
            {...rest}
        />
    );
}
