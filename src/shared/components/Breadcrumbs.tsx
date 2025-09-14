'use client';

import { Group, Text } from '@mantine/core';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { websiteSections } from '../constants/urls';

export default function Breadcrumbs() {
    const pathname = usePathname();

    const splittedPathname = pathname.split('/').map((path) => `/${path}`);

    const breadcrumbSections = splittedPathname
        .map((path) => websiteSections.find((section) => section.link === path))
        // TODO Bypass ts -> Better to replace with something more reliable
        .filter((section): section is NonNullable<typeof section> => !!section);

    return (
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
    );
}
