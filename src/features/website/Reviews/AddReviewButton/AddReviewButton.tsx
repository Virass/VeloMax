'use client';

import { Text } from '@mantine/core';

import { Button } from '@/shared/components/Button';

import styles from '../styles/reviews.module.scss';

export default function AddReviewButton({ onClick }: { onClick: () => void }) {
    return (
        <Button
            bdrs="32px"
            bg="gray.9"
            c="white"
            size="lg"
            onClick={onClick}
            className={styles.reviews__addReviewButton}
        >
            <Text size="18px">Залишити відгук</Text>
        </Button>
    );
}
