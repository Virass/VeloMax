import { Group, Stack } from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';

import styles from '@/entities/website/Footer/styles/website-footer.module.scss';
import FacebookIcon from '@/shared/ui/icons/FacebookIcon';
import InstagramIcon from '@/shared/ui/icons/InstagramIcon';
import TelegramIcon from '@/shared/ui/icons/TelegramIcon';

import { getSocialMedias } from './services/footerSocialMedias.service';

const socialMediasIconMap = {
    instagram: <InstagramIcon width={18} height={18} />,
    facebook: <FacebookIcon width={13} height={20} />,
    telegram: <TelegramIcon width={20} height={18} mode="fill" />,
};

export default async function FooterLogoAndSocialsSection() {
    const socialMedias = await getSocialMedias();

    return (
        <Stack justify="center" align="center" gap="xs">
            <Image
                src="/Logo.svg"
                alt="Company Logo"
                className={styles.footerLogo}
                width={72}
                height={72}
                priority
            />

            <Group className={styles.footerSocialMedias}>
                {socialMedias.map(({ platform, link }) => (
                    <Link key={platform} href={link}>
                        {socialMediasIconMap[platform]}
                    </Link>
                ))}
            </Group>
        </Stack>
    );
}
