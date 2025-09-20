type FilterType = 'checkbox' | 'radio' | 'range';

export type Filter = {
    name: string;
    type: FilterType;
    options: string[] | number[];
};
