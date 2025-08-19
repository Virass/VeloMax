import React from 'react';
import { Container, Group } from '@mantine/core';

type FooterProps = {
    left?: React.ReactNode;
    center?: React.ReactNode;
    right?: React.ReactNode;
};

export const Footer = ({ left, center, right }: FooterProps) => {
    return (
        <footer>
            <Container size="xl" py="md">
                <Group justify="space-between" align="flex-start">
                    <div>{left}</div>
                    <div>{center}</div>
                    <div>{right}</div>
                </Group>
            </Container>
        </footer>
    );
};
