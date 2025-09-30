import { simulateCrud } from '@/core/config/api';
import { reviews } from '@/shared/constants/mockData/mockData';
import type { Review } from '@/shared/types/reviewType';

export const getReviews = async (productId: string): Promise<Review[]> => {
    const filteredReviews = reviews.filter(
        (review) => review.productId === productId
    );

    const result = await simulateCrud(filteredReviews, 1500);

    return result;
};
