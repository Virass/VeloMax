import { Text } from '@mantine/core';
import Link from 'next/link';

import { SITE_NAME } from '@/shared/constants/branding';
import { NAV_LINKS } from '@/shared/constants/urls';

export const Brand = () => {
    const mainLink =
        NAV_LINKS.find((link) => link.label === 'головна')?.href || '/';

    return (
        <Link
            href={mainLink}
            aria-label={SITE_NAME}
            style={{ textDecoration: 'none' }}
        >
            <Text
                fw={500}
                fz={{ base: 18, md: 20 }}
                lh={1}
                ff="inherit"
                style={{ letterSpacing: 0.2, color: 'rgba(0, 0, 0, 1)' }}
            >
                {SITE_NAME}
            </Text>
        </Link>
    );
};
