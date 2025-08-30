import React from 'react';

import { Group, Container } from '@mantine/core';

import { Phones } from '@/shared/components/Phones';

export const Header = () => (
    <header>
        <Container size="xl">
            <Group justify="space-between" align="center">
                <div>
                    <Phones align="center" />
                </div>
                <nav>center</nav>
                <div>right</div>
            </Group>
        </Container>
    </header>
);
