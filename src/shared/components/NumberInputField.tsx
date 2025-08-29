import { NumberInput } from '@mantine/core';

import type { BaseInputProps } from '../types/adminFormTypes';

interface Props extends BaseInputProps {
    min?: number;
    max?: number;
    step?: number;
}

export default function NumberInputField({
    label,
    placeholder,
    min,
    max,
    step,
    ...rest
}: Props) {
    return (
        <NumberInput
            label={label}
            placeholder={placeholder}
            min={min}
            max={max}
            step={step}
            {...rest}
        />
    );
}
