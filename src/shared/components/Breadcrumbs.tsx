'use client';

import { Group, Text, Box, useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { websiteSections } from '../constants/urls';
import { BREAKPOINTS } from '../constants/breakpoints';

export default function Breadcrumbs() {
    const pathname = usePathname();
    const theme = useMantineTheme();

    const isTablet = useMediaQuery(`(min-width: ${theme.breakpoints.sm})`);

    const splittedPathname = pathname
        .split('/')
        .filter(Boolean)
        .map((_segment, index, arr) => '/' + arr.slice(0, index + 1).join('/'));

    splittedPathname.unshift('/');

    const breadcrumbSections = splittedPathname.map((path) => {
        const match = websiteSections.find((section) => section.link === path);

        if (match) {
            return match;
        }

        const segments = path.split('/');
        const label = segments[segments.length - 1];

        return { label, link: path };
    });

    return (
        <Box
            // Apply outer box styles only from tablet and up
            bg={isTablet ? 'gray.1' : undefined}
            p={isTablet ? '48px 64px' : 0}
            style={{
                borderRadius: isTablet ? 48 : 0,
                width: BREAKPOINTS.xxl,
                margin: 'auto'
            }}
        >
            <Group gap="0.25rem">
                {breadcrumbSections.map((section, index) => (
                    <Text
                        key={section.link}
                        component={Link}
                        href={section.link}
                        variant="link"
                        tt="capitalize"
                    >
                        {section.label}
                        {index < breadcrumbSections.length - 1 && (
                            <Text span color="gray.6">
                                {' '}
                                /
                            </Text>
                        )}
                    </Text>
                ))}
            </Group>
        </Box>
    );
}
