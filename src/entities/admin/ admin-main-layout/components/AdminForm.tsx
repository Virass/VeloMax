'use client';

import { Group, NumberInput, Select, Stack } from '@mantine/core';
import {
    type Path,
    type SubmitHandler,
    type FieldValues,
    useForm,
    Controller,
} from 'react-hook-form';

import { Button } from '@/shared/components/Button';
import { Input } from '@/shared/components/Input';
import type { FieldConfig, FormSchema } from '@/shared/types/adminFormTypes';

interface AdminFormProps<T> {
    schema: FormSchema<T>;
    onSubmit: SubmitHandler<T>;
}

export function AdminForm<T extends FieldValues>({
    schema,
    onSubmit,
}: AdminFormProps<T>) {
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
                                // create a global select input for this one
                                <Controller
                                    key={fieldKey}
                                    name={fieldKey}
                                    control={control}
                                    render={({ field }) => (
                                        <Select
                                            label={config.title}
                                            placeholder={`Select ${config.title}`}
                                            data={config.options}
                                            {...field}
                                        />
                                    )}
                                />
                            );
                        }

                        // create a global number input for this one
                        if (config.inputType === 'number') {
                            return (
                                <Controller
                                    key={fieldKey}
                                    name={fieldKey}
                                    control={control}
                                    render={({ field }) => (
                                        <NumberInput
                                            label={config.title}
                                            {...field}
                                        />
                                    )}
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
