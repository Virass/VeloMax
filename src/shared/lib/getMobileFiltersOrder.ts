import type { Filter } from '@/features/website/Products/types/filters';

export const getMobileFiltersOrder = (filters: Filter[]) => {
    const rangeInputs: Filter[] = [];

    const others = filters.filter((input) => {
        if (input.type === 'range') {
            rangeInputs.push(input);

            return false;
        }

        return true;
    });

    return [...others, ...rangeInputs];
};
