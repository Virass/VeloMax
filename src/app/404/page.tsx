import { Button, Container, Group, Text, Title } from '@mantine/core';
import classes from '@/shared/styles/not-found.module.css';
import Link from 'next/link';

export default function NotFoundPage() {
    return (
        <Container className={classes.root}>
            <div className={classes.label}>404</div>
            <Title className={classes.title}>
                От халепа, щось пішло не так...
            </Title>
            <Text
                c="dimmed"
                size="lg"
                ta="center"
                className={classes.description}
            >
                На жаль сторінку не знайдено. Ви могли помилитися в адресі або сторінка була переміщена на іншу URL-адресу.
            </Text>
            <Group justify="center">
                <Link href="/">
                    <Button variant="subtle" size="md">
                        Повернутися на головну сторінку
                    </Button>
                </Link>
            </Group>
        </Container>
    );
}
