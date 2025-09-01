import { Group, Stack, Text } from '@mantine/core';
import Link from 'next/link';

import { websiteSections } from '@/shared/constants/urls';
import styles from '@/shared/styles/website-footer.module.css';

export default function FooterNavigation() {
    const columns = [websiteSections.slice(0, 4), websiteSections.slice(4)];

    return (
        <Group justify="space-between" align="flex-start">
            {columns.map((column, columnIndex) => (
                <Stack key={columnIndex}>
                    {column.map(({ label, link }) => (
                        <Link
                            key={label}
                            href={link}
                            className={styles.navigationItem}
                        >
                            <Text tt="capitalize" c="gray.0">
                                {label}
                            </Text>
                        </Link>
                    ))}
                </Stack>
            ))}
        </Group>
    );
}
