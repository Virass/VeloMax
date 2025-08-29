import type { FieldValues } from 'react-hook-form';

import type { InputTypes, ValidationType } from '../types/adminFormTypes';

type FieldInput<T extends FieldValues> =
    | string
    | {
          fieldName: string;
          inputType?: InputTypes;
          validation?: ValidationType<T>;
      };

export function makeFieldCreator<T extends FieldValues>(title: string) {
    return function createEntityFormField(field: FieldInput<T>) {
        const getMinimumOptions = (fieldName: string) => ({
            title: `${title} ${fieldName}`,
            fieldName,
            inputType: 'text',
        });

        if (typeof field === 'string') {
            return getMinimumOptions(field);
        } else {
            const { fieldName, inputType, validation } = field;

            return {
                ...getMinimumOptions(fieldName),
                inputType,
                validation,
            };
        }
    };
}
