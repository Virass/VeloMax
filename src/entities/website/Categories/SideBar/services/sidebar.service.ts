import { simulateCrud } from '@/core/config/api';
import { filters } from '@/shared/constants/mockData';

export const getFilters = async () => {
    const categoriesFilters = await simulateCrud(filters, 1500);

    return categoriesFilters;
};
