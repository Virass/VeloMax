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

import CheckboxField from './CheckboxInput';
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

                        const baseProps = {
                            name: fieldKey,
                            control,
                            validation,
                        };

                        if (config.inputType === 'select' && config.options) {
                            return (
                                <ControlledInput
                                    key={fieldKey}
                                    {...baseProps}
                                    Input={SelectInput}
                                    inputProps={{
                                        label: config.title,
                                        placeholder: config.title,
                                        options: config.options,
                                    }}
                                />
                            );
                        }

                        if (config.inputType === 'number') {
                            return (
                                <ControlledInput
                                    key={fieldKey}
                                    {...baseProps}
                                    Input={NumberInputField}
                                    inputProps={{ label: config.title }}
                                />
                            );
                        }

                        if (config.inputType === 'checkbox') {
                            return (
                                <ControlledInput
                                    key={fieldKey}
                                    {...baseProps}
                                    Input={CheckboxField}
                                    inputProps={{
                                        label: config.title,
                                        labelPosition: config.labelPosition,
                                    }}
                                />
                            );
                        }

                        return (
                            <ControlledInput
                                key={fieldKey}
                                {...baseProps}
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
