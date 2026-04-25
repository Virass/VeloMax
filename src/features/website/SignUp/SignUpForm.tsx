'use client';

import { Stack, Container, Checkbox } from '@mantine/core';
import { useForm } from 'react-hook-form';

import { Button } from '@/shared/components/Button';
import ControlledInput from '@/shared/components/ControlledInput';
import { Input } from '@/shared/components/Input';
import PasswordStrengthIndicator from '@/shared/components/PasswordStrengthIndicator';

interface SignUpFormValues {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    address: string;
    password: string;
    confirmPassword: string;
    acceptTerms: boolean;
}

export default function SignUpForm() {
    const {
        control,
        handleSubmit,
        watch,
        formState: { isSubmitting },
    } = useForm<SignUpFormValues>({
        defaultValues: {
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            address: '',
            password: '',
            confirmPassword: '',
            acceptTerms: false,
        },
    });

    const password = watch('password');

    const onSubmit = (data: SignUpFormValues) => {
        console.log('Form Submitted:', data);
    };

    const labelStyle = { label: { fontWeight: 700 } };

    return (
        <Container w="100%">
            <form onSubmit={handleSubmit(onSubmit)}>
                <Stack gap="md">
                    <ControlledInput
                        name="firstName"
                        control={control}
                        Input={Input}
                        inputProps={{
                            label: "Ім'я",
                            placeholder: "Ваше ім'я",
                            required: true,
                            styles: labelStyle,
                        }}
                        validation={{ required: "Поле Ім'я Обов'язкове" }}
                    />

                    <ControlledInput
                        name="lastName"
                        control={control}
                        Input={Input}
                        inputProps={{
                            label: 'Прізвище',
                            placeholder: 'Ваше прізвище',
                            required: true,
                            styles: labelStyle,
                        }}
                        validation={{ required: "Поле Прізвище Обов'язкове" }}
                    />

                    <ControlledInput
                        name="email"
                        control={control}
                        Input={Input}
                        inputProps={{
                            label: 'Email',
                            placeholder: 'ваш@email.com',
                            required: true,
                            styles: labelStyle,
                        }}
                        validation={{
                            required: "Поле Email Обов'язкове",
                            pattern: {
                                value: /\S+@\S+\.\S+/,
                                message: 'Неправильний формат email',
                            },
                        }}
                    />

                    <ControlledInput
                        name="phoneNumber"
                        control={control}
                        Input={Input}
                        inputProps={{
                            label: 'Номер телефону',
                            placeholder: '+380...',
                            required: true,
                            styles: labelStyle,
                        }}
                        validation={{
                            required: "Поле Номер телефону Обов'язкове",
                        }}
                    />

                    <ControlledInput
                        name="address"
                        control={control}
                        Input={Input}
                        inputProps={{
                            label: 'Адреса',
                            placeholder: 'Ваша адреса',
                            styles: labelStyle,
                        }}
                    />

                    <Stack gap="0">
                        <ControlledInput
                            name="password"
                            control={control}
                            Input={Input}
                            inputProps={{
                                label: 'Пароль',
                                placeholder: 'Пароль',
                                required: true,
                                styles: labelStyle,
                                type: 'password',
                            }}
                            validation={{
                                required: "Поле Пароль Обов'язкове",
                                minLength: {
                                    value: 6,
                                    message:
                                        'Пароль має містити мінімум 6 символів',
                                },
                            }}
                        />

                        <PasswordStrengthIndicator passwordValue={password} />
                    </Stack>

                    <ControlledInput
                        name="confirmPassword"
                        control={control}
                        Input={Input}
                        inputProps={{
                            label: 'Підтвердіть пароль',
                            placeholder: 'Повторіть пароль',
                            required: true,
                            styles: labelStyle,
                            type: 'password',
                        }}
                        validation={{
                            required: 'Будь ласка, підтвердіть свій пароль',
                            validate: (value) =>
                                value === password || 'Паролі не співпадають',
                        }}
                    />

                    <ControlledInput
                        name="acceptTerms"
                        control={control}
                        Input={({ value, onChange, ...others }) => (
                            <Checkbox
                                {...others}
                                checked={!!value}
                                onChange={(e) =>
                                    onChange(e.currentTarget.checked)
                                }
                            />
                        )}
                        inputProps={{
                            label: 'Я приймаю умови користування та політику конфіденційності',
                            styles: labelStyle,
                        }}
                        validation={{
                            required:
                                'Ви повинні прийняти умови, щоб продовжити',
                        }}
                    />

                    <Button
                        type="submit"
                        fullWidth
                        mt="xl"
                        loading={isSubmitting}
                    >
                        Створити акаунт
                    </Button>
                </Stack>
            </form>
        </Container>
    );
}
