import type { ComponentType } from 'react';

import {
    type ControllerRenderProps,
    type Control,
    type FieldValues,
    type Path,
    Controller,
} from 'react-hook-form';

import type { ValidationType } from '../types/adminFormTypes';

// Change: Allow value to be any of the types a form field can hold
type InputProps<T extends FieldValues> = Omit<
    ControllerRenderProps<T>,
    'value'
> & {
    value: any;
    error?: string;
    labelPosition?: 'left' | 'right';
};

interface Props<T extends FieldValues, ExtraProps> {
    name: Path<T>;
    control: Control<T>;
    validation?: ValidationType<T>;
    // Change: Use the modified InputProps
    Input: ComponentType<InputProps<T> & ExtraProps>;
    inputProps?: ExtraProps;
    // Addition: Allow passing a custom defaultValue (e.g. false for checkboxes)
    defaultValue?: any;
}

export default function ControlledInput<T extends FieldValues, ExtraProps>({
    control,
    name,
    validation,
    Input,
    inputProps,
    defaultValue,
}: Props<T, ExtraProps>) {
    return (
        <Controller
            name={name}
            control={control}
            rules={validation}
            // Change: Use the passed defaultValue or let the useForm defaultValues handle it
            defaultValue={defaultValue}
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
