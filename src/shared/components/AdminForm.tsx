'use client';

import { Group, Stack } from '@mantine/core';
import {
    type Path,
    type SubmitHandler,
    type FieldValues,
    useForm,
} from 'react-hook-form';

import { Button } from '@/shared/components/Button';
import { Input } from '@/shared/components/Input';
import type { FieldConfig, FormSchema } from '@/shared/types/adminFormTypes';

import NumberInputField from './NumberInputField';
import SelectInput from './SelectInput';

interface Props<T> {
    schema: FormSchema<T>;
    onSubmit: SubmitHandler<T>;
}

export function AdminForm<T extends FieldValues>({
    schema,
    onSubmit,
}: Props<T>) {
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<T>();

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Stack gap="sm">
                {(Object.entries(schema) as [Path<T>, FieldConfig][]).map(
                    ([fieldKey, config]) => {
                        if (config.inputType === 'select' && config.options) {
                            return (
                                <SelectInput
                                    key={fieldKey}
                                    name={fieldKey}
                                    control={control}
                                    label={config.title}
                                    options={config.options}
                                />
                            );
                        }

                        if (config.inputType === 'number') {
                            return (
                                <NumberInputField
                                    key={fieldKey}
                                    name={fieldKey}
                                    control={control}
                                    label={config.title}
                                />
                            );
                        }

                        return (
                            <Input
                                key={fieldKey}
                                label={config.title}
                                {...register(fieldKey)}
                            />
                        );
                    }
                )}

                <Group justify="flex-end">
                    <Button type="submit">Submit</Button>
                </Group>
            </Stack>
        </form>
    );
}
