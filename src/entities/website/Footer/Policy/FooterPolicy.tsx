import { Stack, Text } from '@mantine/core';
import Link from 'next/link';

import styles from '@/entities/website/Footer/styles/website-footer.module.scss';

import { getPolicies } from './services/footerPolicy.service';

export default async function FooterPolicy() {
    const policies = await getPolicies();

    return (
        <Stack justify="center" align="center" gap="xs">
            {policies.map(({ label, link }) => (
                <Link
                    key={label}
                    href={link}
                    className={styles.footerNavigationItem}
                >
                    <Text size="xs" c="gray.0">
                        {label}
                    </Text>
                </Link>
            ))}
        </Stack>
    );
}
