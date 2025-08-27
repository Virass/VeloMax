import type { HTMLInputTypeAttribute } from 'react';

import type {
    Control,
    FieldValues,
    Path,
    RegisterOptions,
} from 'react-hook-form';

export type InputTypes = HTMLInputTypeAttribute | 'select' | 'file' | 'image';

export type ValidationType<T extends FieldValues> = RegisterOptions<T, Path<T>>;

export interface FieldConfig<T extends FieldValues = FieldValues> {
    title: string;
    inputType?: InputTypes;
    validation?: ValidationType<T>;
    options?: string[];
    accept?: string;
    multiple?: boolean;
    min?: number;
    max?: number;
    step?: number;
    rows?: number;
    defaultChecked?: boolean;
}

export type FormSchema<T> = { [K in keyof T]: FieldConfig };

export interface BaseInputProps<T extends FieldValues> {
    name: Path<T>;
    control: Control<T>;
    label: string;
    placeholder?: string;
    validation?: ValidationType<T>;
}
