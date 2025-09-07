import { Text } from '@mantine/core';
import Link from 'next/link';

interface Props {
    label: string;
    link: string;
}

import styles from '@/entities/website/Footer/styles/website-footer.module.css';

export default function FooterNavigationSection({ label, link }: Props) {
    return (
        <Link key={label} href={link} className={styles.footerNavigationItem}>
            <Text tt="capitalize" c="gray.0">
                {label}
            </Text>
        </Link>
    );
}
