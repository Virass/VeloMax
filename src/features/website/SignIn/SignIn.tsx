import { Container, SimpleGrid, Stack, Text, Title, Box } from '@mantine/core';
import Link from 'next/link';

import { Button } from '@/shared/components/Button';
import { URLs } from '@/shared/constants/urls';

import ListOfAdvantages from './ListOfAdvantages';
import SignInForm from './SignInForm';

export default function SignIn() {
    return (
        <Container size="100%" p={0} style={{ flex: 1, display: 'flex' }}>
            <SimpleGrid
                cols={{ base: 1, md: 2 }}
                spacing={0}
                style={{ width: '100%' }}
            >
                <Box
                    p={{ base: 'xl', md: 80 }}
                    style={{
                        display: 'flex',
                        alignItems: 'end',
                        justifyContent: 'end',
                    }}
                >
                    <Stack maw={500} w="100%">
                        <Title order={2}>Вхід</Title>

                        <Text c="dimmed">
                            Увійдіть у свій обліковий запис, щоб відстежувати
                            замовлення, додавати товари до списку бажаного,
                            керувати особистою інформацією та адресами і
                            продовжити покупки!
                        </Text>

                        <SignInForm />
                    </Stack>
                </Box>

                <Box bg="dark.8" bdrs={32} c="white" p={{ base: 'xl', md: 80 }}>
                    <Stack maw={500} w="100%">
                        <Title order={2}>Створити акаунт</Title>

                        <Text c="dimmed">
                            Станьте частиною нашої родини! Створення облікового
                            запису допоможе вам керувати замовленнями та швидко
                            й легко оформлювати покупки, а також надає багато
                            переваг:
                        </Text>

                        <ListOfAdvantages />

                        <Link
                            href={URLs.auth.signUp}
                            style={{ textDecoration: 'none' }}
                        >
                            <Button fullWidth>Створити акаунт</Button>
                        </Link>
                    </Stack>
                </Box>
            </SimpleGrid>
        </Container>
    );
}
