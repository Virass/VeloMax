import React from 'react';
import { Group, Container } from '@mantine/core';

type HeaderProps = {
    left?: React.ReactNode;
    center?: React.ReactNode;
    right?: React.ReactNode;
};

export const Header = ({ left, center, right }: HeaderProps) => {
    return (
        <header>
            <Container size="xl">
                <Group justify="space-between" align="center">
                    <div>{left}</div>
                    <nav>{center}</nav>
                    <div>{right}</div>
                </Group>
            </Container>
        </header>
    );
};
