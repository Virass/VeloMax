import { Group, Stack, Text, Title } from '@mantine/core';

import Avatar from '@/shared/components/Avatar';
import Rating from '@/shared/components/Rating';
import type { Review } from '@/shared/types/reviewType';

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
                    <Text>{user}</Text>
                    <Text>{createdAt.toDateString()}</Text>
                </Stack>
            </Group>

            <Rating readonly value={rating} />

            <Stack gap="8px">
                <Title fz="20px">{title}</Title>
                <Text>{comment}</Text>
            </Stack>
        </Stack>
    );
}
