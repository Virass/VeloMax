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
import type {
    FieldConfig,
    FormSchema,
    ValidationType,
} from '@/shared/types/adminFormTypes';

import ControlledInput from './ControlledInput';
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
    const { handleSubmit, control } = useForm<T>();

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Stack gap="sm">
                {(Object.entries(schema) as [Path<T>, FieldConfig][]).map(
                    ([fieldKey, config]) => {
                        const validation =
                            config.validation as ValidationType<T>;

                        if (config.inputType === 'select' && config.options) {
                            return (
                                <ControlledInput
                                    key={config.title}
                                    name={fieldKey}
                                    control={control}
                                    validation={validation}
                                    Input={SelectInput}
                                    inputProps={{
                                        label: fieldKey,
                                        placeholder: config.title,
                                        options: config.options,
                                    }}
                                />
                            );
                        }

                        if (config.inputType === 'number') {
                            return (
                                <ControlledInput
                                    key={config.title}
                                    name={fieldKey}
                                    control={control}
                                    validation={validation}
                                    Input={NumberInputField}
                                    inputProps={{ label: config.title }}
                                />
                            );
                        }

                        return (
                            <ControlledInput
                                key={fieldKey}
                                name={fieldKey}
                                control={control}
                                validation={validation}
                                Input={Input}
                                inputProps={{
                                    label: config.title,
                                    placeholder: config.title,
                                }}
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
