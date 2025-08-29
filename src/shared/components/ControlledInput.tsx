import type { ComponentType } from 'react';

import {
    type ControllerRenderProps,
    type Control,
    type FieldValues,
    type Path,
    type PathValue,
    Controller,
} from 'react-hook-form';

import type { ValidationType } from '../types/adminFormTypes';

type InputProps<T extends FieldValues> = ControllerRenderProps<T> & {
    error?: string;
};

interface Props<T extends FieldValues, ExtraProps> {
    name: Path<T>;
    control: Control<T>;
    validation?: ValidationType<T>;
    Input: ComponentType<InputProps<T> & ExtraProps>;
    inputProps?: ExtraProps;
}

export default function ControlledInput<T extends FieldValues, ExtraProps>({
    control,
    name,
    validation,
    Input,
    inputProps,
}: Props<T, ExtraProps>) {
    return (
        <Controller
            name={name}
            control={control}
            rules={validation}
            defaultValue={'' as PathValue<T, Path<T>>}
            render={({ field, fieldState }) => (
                <Input
                    {...field}
                    {...(inputProps as ExtraProps)}
                    error={fieldState.error?.message}
                />
            )}
        />
    );
}
