import { Select } from '@mantine/core';
import { type FieldValues, Controller } from 'react-hook-form';

import type { BaseInputProps } from '../types/adminFormTypes';

interface Props<T extends FieldValues> extends BaseInputProps<T> {
    options: string[];
}

export default function SelectInput<T extends FieldValues>({
    name,
    control,
    label,
    placeholder,
    options,
}: Props<T>) {
    return (
        <Controller
            name={name}
            control={control}
            render={({ field }) => (
                <Select
                    label={label}
                    placeholder={placeholder ?? `Select ${label}`}
                    data={options}
                    {...field}
                />
            )}
        />
    );
}
