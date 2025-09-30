import { Stack, Text, Title } from '@mantine/core';

import { Button } from '@/shared/components/Button';

import { Review } from './Review';
import { getReviews } from './services/reviews.service';

interface Props {
    productId: string;
}

export default async function Reviews({ productId }: Props) {
    const reviews = await getReviews(productId);

    return (
        <Stack>
            <Title fz="20px" c="dark.9" fw="400">
                Відгуки
            </Title>

            <Button bdrs="32px" bg="gray.9" c="white" size="lg">
                <Text size="18px">Залишити відгук</Text>
            </Button>

            {!!reviews.length ? (
                <Stack gap="12px">
                    {reviews.map((review) => (
                        <Review key={review.id} review={review} />
                    ))}
                </Stack>
            ) : (
                <Text ta="center">У цього товару ще немає відгуків.</Text>
            )}
        </Stack>
    );
}
