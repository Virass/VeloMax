'use client';

import { Stack, Text, Title } from '@mantine/core';
import { type SubmitHandler, useForm } from 'react-hook-form';

import { Button } from '@/shared/components/Button';
import { Input } from '@/shared/components/Input';
import Rating from '@/shared/components/Rating';
import { Textarea } from '@/shared/components/Textarea';

import styles from '../styles/reviews.module.scss';

export default function AddReviewForm() {
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm<{ name: string; email: string }>();

    const onSubmit: SubmitHandler<{ email: string }> = ({ name, email }) => {};

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className={styles.addReviewForm}
        >
            <Stack justify="center" align="center" gap="16px">
                <Title fz="24px" fw={700}>
                    Ваша оцінка
                </Title>

                <Rating
                    defaultValue={1}
                    classNames={{
                        starSymbol: styles.addReviewForm__ratingStar,
                    }}
                />

                <Input
                    placeholder="Ваше ім'я"
                    rounded
                    size="lg"
                    {...register('name', { required: true })}
                    className={styles.addReviewForm__input}
                />

                <Input
                    placeholder="Ваш email"
                    rounded
                    size="lg"
                    className={styles.addReviewForm__input}
                    {...register('email', {
                        required: true,
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                            message: 'Invalid email address',
                        },
                    })}
                />

                <Stack
                    w="100%"
                    className={styles.addReviewForm__textareaContainer}
                >
                    <Stack gap="4px" w="100%">
                        <Text ta="center" fz="18px">
                            Ви можете залишити свій відгук
                        </Text>

                        <Textarea
                            placeholder="Ваш відгук"
                            size="lg"
                            rounded
                            w="100%"
                            className={styles.addReviewForm__textarea}
                            styles={{
                                input: {
                                    height: '300px',
                                    resize: 'none',
                                    overflow: 'auto',
                                },
                            }}
                            minRows={10}
                        />
                    </Stack>

                    <Button
                        type="submit"
                        bdrs="32px"
                        bg="gray.9"
                        size="lg"
                        c="white"
                        w="100%"
                        className={styles.addReviewForm__button}
                    >
                        Додати відгук
                    </Button>
                </Stack>
            </Stack>
        </form>
    );
}
