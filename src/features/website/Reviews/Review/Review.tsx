import { Group, Stack, Text, Title } from '@mantine/core';

import Avatar from '@/shared/components/Avatar';
import Rating from '@/shared/components/Rating';
import type { Review } from '@/shared/types/reviewType';

import styles from '../styles/reviews.module.scss';

interface Props {
    review: Review;
}

export default function Review({ review }: Props) {
    const { title, comment, user, createdAt, rating } = review;

    return (
        <Stack gap="12px" bdrs="32px" bg="white" p="24px 18px">
            <Group gap="12px">
                <Avatar name={user} />

                <Stack gap="0">
                    <Text className={styles.review__text}>{user}</Text>
                    <Text className={styles.review__date}>
                        {createdAt.toDateString()}
                    </Text>
                </Stack>
            </Group>

            <Rating readonly value={rating} />

            <Stack gap="8px">
                <Title className={styles.review__title}>{title}</Title>
                <Text className={styles.review__text}>{comment}</Text>
            </Stack>
        </Stack>
    );
}
