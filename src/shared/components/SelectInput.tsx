import { type SelectProps, Select } from '@mantine/core';

interface Props extends SelectProps {
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
