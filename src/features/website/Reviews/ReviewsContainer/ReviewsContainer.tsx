'use client';

import type { Review as ReviewType } from '@/shared/types/reviewType';

import LoadMore from '../../loadMoreContainer/LoadMoreContainer';
import { Review } from '../Review';

interface Props {
    reviews: ReviewType[];
}

export default function ReviewsContainer({ reviews }: Props) {
    return (
        <LoadMore hasMore={true} loadMore={() => {}} loading={false}>
            {reviews.map((review) => (
                <Review key={review.id} review={review} />
            ))}
        </LoadMore>
    );
}
