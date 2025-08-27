import { NumberInput } from '@mantine/core';
import { type FieldValues, Controller } from 'react-hook-form';

import type { BaseInputProps } from '../types/adminFormTypes';

interface Props<T extends FieldValues> extends BaseInputProps<T> {
    min?: number;
    max?: number;
    step?: number;
}

export default function NumberInputField<T extends FieldValues>({
    name,
    control,
    label,
    placeholder,
    min,
    max,
    step,
}: Props<T>) {
    return (
        <Controller
            name={name}
            control={control}
            render={({ field }) => (
                <NumberInput
                    placeholder={placeholder}
                    min={min}
                    max={max}
                    step={step}
                    label={label}
                    {...field}
                />
            )}
        />
    );
}
