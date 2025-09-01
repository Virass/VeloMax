'use client';

import { Stack, Text } from '@mantine/core';
import { type SubmitHandler, useForm } from 'react-hook-form';

import { Button } from '@/shared/components/Button';
import ControlledInput from '@/shared/components/ControlledInput';
import { Input } from '@/shared/components/Input';
import styles from '@/shared/styles/website-footer.module.css';
import RightArrowIcon from '@/shared/ui/icons/RightArrowIcon';

export default function FooterFeedbackForm() {
    const { handleSubmit, control } = useForm<{ email: string }>();

    const onSubmit: SubmitHandler<{ email: string }> = ({ email }) => {};

    return (
        <Stack className={styles.footerFeedBack}>
            <Text>Залишайтесь на зв'язку</Text>

            <form onSubmit={handleSubmit(onSubmit)}>
                <ControlledInput
                    name="email"
                    control={control}
                    Input={Input}
                    validation={{
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                            message: 'Invalid email address',
                        },
                    }}
                    inputProps={{
                        placeholder: 'Ваш email...',
                        rightIcon: (
                            <Button
                                type="submit"
                                variant="subtle"
                                px={0}
                                className={styles.submitButton}
                            >
                                <RightArrowIcon mode="stroke" width={20} />
                            </Button>
                        ),

                        rounded: true,
                    }}
                />
            </form>
        </Stack>
    );
}
