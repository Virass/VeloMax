import { type CheckboxProps, Checkbox } from '@mantine/core';

export default function CheckboxField({ ...rest }: CheckboxProps) {
    return <Checkbox {...rest} />;
}
