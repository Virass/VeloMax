import React from 'react';

import { Container, Group } from '@mantine/core';

export const Footer = () => (
    <footer>
        <Container size="xl" py="md">
            <Group justify="space-between" align="flex-start">
                <div>left</div>
                <div>center</div>
                <div>right</div>
            </Group>
        </Container>
    </footer>
);
