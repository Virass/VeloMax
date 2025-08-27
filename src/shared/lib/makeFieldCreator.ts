import type { HTMLInputTypeAttribute } from 'react';

export function makeFieldCreator(title: string) {
    return function createEntityFormField(
        field: string,
        inputType: HTMLInputTypeAttribute = 'text'
    ) {
        return { title: `${title} ${field}`, inputType };
    };
}
