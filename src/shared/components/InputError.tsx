import { Text } from '@mantine/core';
import type { FieldError } from 'react-hook-form';

interface Props {
    error: FieldError | undefined;
}

export default function InputError({ error }: Props) {
    return error && <Text c="red.5">{error.message}</Text>;
}
