import type { HTMLInputTypeAttribute } from 'react';

type InputTypes = HTMLInputTypeAttribute | 'select' | 'file' | 'image';

export interface FieldConfig {
    title: string;
    inputType?: InputTypes;
    validation?: string;
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
