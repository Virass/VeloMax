import type { HTMLInputTypeAttribute } from 'react';

export function makeFieldCreator(catalog: string) {
    return function createEntityFormField(
        field: string,
        inputType: HTMLInputTypeAttribute = 'text'
    ) {
        return { title: `${catalog} ${field}`, inputType };
    };
}
