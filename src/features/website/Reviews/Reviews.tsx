import { Box, Flex, Stack, Text, Title } from '@mantine/core';

import { AddReviewFormDrawer } from './AddReviewFormDrawer';
import { AddReviewFormModal } from './AddReviewFormModal';
import ReviewsContainer from './ReviewsContainer/ReviewsContainer';
import { getReviews } from './services/reviews.service';
import styles from './styles/reviews.module.scss';
import productStyles from '../Product/styles/product.module.scss';
import { FeatureFlags } from '@/shared/constants/FeatureFlags';

interface Props {
    productId: string;
}

export default async function Reviews({ productId }: Props) {
    const reviews = await getReviews(productId);

    if (!FeatureFlags.PRODUCT_REVIEWS) {
        return null;
    }

    return (
        <Stack className={styles.reviews}>
            <Flex className={styles.reviews__innerContainer}>
                <Title className={productStyles.productContentContainer__title}>
                    Відгуки
                </Title>

                <Box hiddenFrom="lg">
                    <AddReviewFormDrawer />
                </Box>

                <Box visibleFrom="lg">
                    <AddReviewFormModal />
                </Box>
            </Flex>

            {!!reviews.length ? (
                <ReviewsContainer reviews={reviews} />
            ) : (
                <Text ta="center">У цього товару ще немає відгуків.</Text>
            )}
        </Stack>
    );
}
