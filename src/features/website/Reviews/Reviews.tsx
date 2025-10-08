import { Flex, Stack, Text, Title } from '@mantine/core';

import { Button } from '@/shared/components/Button';

import ReviewsContainer from './ReviewsContainer/ReviewsContainer';
import { getReviews } from './services/reviews.service';
import styles from './styles/reviews.module.scss';
import productStyles from '../Product/styles/product.module.scss';

interface Props {
    productId: string;
}

export default async function Reviews({ productId }: Props) {
    const reviews = await getReviews(productId);

    return (
        <Stack className={styles.reviews}>
            <Flex className={styles.reviews__innerContainer}>
                <Title className={productStyles.productContentContainer__title}>
                    Відгуки
                </Title>

                <Button
                    bdrs="32px"
                    bg="gray.9"
                    c="white"
                    size="lg"
                    className={styles.reviews__addReviewButton}
                >
                    <Text size="18px">Залишити відгук</Text>
                </Button>
            </Flex>

            {!!reviews.length ? (
                <ReviewsContainer reviews={reviews} />
            ) : (
                <Text ta="center">У цього товару ще немає відгуків.</Text>
            )}
        </Stack>
    );
}
