'use client';

import { Stack, Text } from '@mantine/core';
import { type SubmitHandler, useForm } from 'react-hook-form';

import { Button } from '@/shared/components/Button';
import { Input } from '@/shared/components/Input';
import InputError from '@/shared/components/InputError';
import styles from '@/shared/styles/website-footer.module.css';
import RightArrowIcon from '@/shared/ui/icons/RightArrowIcon';

export default function FooterFeedbackForm() {
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm<{
        email: string;
    }>();

    const onSubmit: SubmitHandler<{ email: string }> = ({ email }) => {};

    return (
        <Stack className={styles.footerFeedBack}>
            <Text className={styles.footerFeedBackLabel}>
                Залишайтесь на зв'язку
            </Text>

            <form onSubmit={handleSubmit(onSubmit)}>
                <Input
                    placeholder="Ваш email..."
                    rightIcon={
                        <Button
                            type="submit"
                            variant="subtle"
                            px={0}
                            className={styles.submitButton}
                        >
                            <RightArrowIcon
                                mode="fill"
                                width={20}
                                height={20}
                                color="gray.6"
                            />
                        </Button>
                    }
                    rounded={true}
                    size="md"
                    {...register('email', {
                        required: true,
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                            message: 'Invalid email address',
                        },
                    })}
                />

                <InputError error={errors.email} />
            </form>
        </Stack>
    );
}
