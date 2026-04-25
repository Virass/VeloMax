'use client';

import { useState } from 'react';

import { Stack, Text, Title, Container } from '@mantine/core';

import { Button } from '@/shared/components/Button';
import LeftArrowIcon from '@/shared/ui/icons/LeftArrowIcon';

import SignUpForm from './SignUpForm';

export default function SignUp() {
    const [hovered, setHovered] = useState();

    return (
        <Container size="xs" py="xl">
            <Stack gap="lg">
                <Stack gap="xs">
                    <Title order={2} ta="center">
                        Створення облікового запису
                    </Title>

                    <Text c="gray" ta="center" size="sm">
                        Станьте частиною нашої родини! Уся надана вами
                        інформація буде зашифрована та надійно захищена в нашій
                        системі. Ми обіцяємо не використовувати ваші особисті
                        дані в рекламних цілях!
                    </Text>
                </Stack>

                <SignUpForm />

                <Button
                    justify="start"
                    variant="invisible"
                    leftSection={<LeftArrowIcon color="gray" />}
                    c="gray"
                    onClick={() => window.history.back()}
                >
                    Назад
                </Button>
            </Stack>
        </Container>
    );
}
