import { Group, Stack } from '@mantine/core';
import Link from 'next/link';

import styles from '@/shared/styles/website-footer.module.css';
import FacebookIcon from '@/shared/ui/icons/FacebookIcon';
import InstagramIcon from '@/shared/ui/icons/InstagramIcon';
import TelegramIcon from '@/shared/ui/icons/TelegramIcon';

const socialMedias = [
    {
        icon: <InstagramIcon width={18} height={18} />,
        url: 'instagram',
    },
    {
        icon: <FacebookIcon width={13} height={20} />,
        url: 'facebook',
    },
    {
        icon: <TelegramIcon width={20} height={18} mode="fill" />,
        url: 'telegram',
    },
];

export default function FooterLogoAndSocialsSection() {
    return (
        <Stack justify="center" align="center" gap="xs">
            {/* Real Logo should be here */}
            <div className={styles.logo} />

            <Group>
                {socialMedias.map(({ icon, url }) => (
                    <Link key={url} href={url}>
                        {icon}
                    </Link>
                ))}
            </Group>
        </Stack>
    );
}
