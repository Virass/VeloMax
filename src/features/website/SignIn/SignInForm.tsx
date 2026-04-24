'use client';

import { Stack, Container, Anchor } from '@mantine/core';
import { useForm } from 'react-hook-form';

import { Button } from '@/shared/components/Button';
import ControlledInput from '@/shared/components/ControlledInput';
import { Input } from '@/shared/components/Input';

interface LoginFormValues {
    email: '';
    password: '';
}

export default function SignInForm() {
    const {
        control,
        handleSubmit,
        formState: { isSubmitting },
    } = useForm<LoginFormValues>({
        defaultValues: {
            email: '',
            password: '',
        },
    });

    const onSubmit = (data: LoginFormValues) => {
        console.log('Form Submitted:', data);
    };

    return (
        <Container w="100%">
            <form onSubmit={handleSubmit(onSubmit)}>
                <Stack gap="md">
                    <ControlledInput
                        name="email"
                        control={control}
                        Input={Input}
                        inputProps={{
                            label: 'Email',
                            placeholder: 'ваш@email.com',
                            required: true,
                            styles: { label: { fontWeight: 700 } },
                        }}
                        validation={{
                            required: 'Email is required',
                            pattern: {
                                value: /\S+@\S+\.\S+/,
                                message: 'Invalid email format',
                            },
                        }}
                    />

                    <ControlledInput
                        name="password"
                        control={control}
                        Input={Input}
                        inputProps={{
                            label: 'Пароль',
                            placeholder: 'Пароль',
                            required: true,
                            styles: { label: { fontWeight: 700 } },
                            type: 'password',
                        }}
                        validation={{
                            required: 'Password is required',
                            minLength: {
                                value: 6,
                                message:
                                    'Password must be at least 6 characters',
                            },
                        }}
                    />

                    <Button
                        type="submit"
                        fullWidth
                        mt="xl"
                        loading={isSubmitting}
                    >
                        Увійти
                    </Button>

                    <Anchor
                        href="/forgot-password"
                        size="sm"
                        ta="right"
                        display="block"
                        c="dark.8"
                    >
                        Забули пароль?
                    </Anchor>
                </Stack>
            </form>
        </Container>
    );
}
