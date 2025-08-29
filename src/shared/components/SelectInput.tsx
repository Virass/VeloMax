import { Select } from '@mantine/core';

import type { BaseInputProps } from '../types/adminFormTypes';

interface Props extends BaseInputProps {
    options?: string[];
}

export default function SelectInput({
    label,
    placeholder,
    options,
    ...rest
}: Props) {
    return (
        <Select
            label={label}
            placeholder={placeholder ?? `Select ${label}`}
            data={options}
            {...rest}
        />
    );
}
