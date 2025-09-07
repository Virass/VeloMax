import { Flex, Group } from '@mantine/core';

import FooterNavigationSection from '@/shared/components/FooterNavigationSection';
import { websiteSections } from '@/shared/constants/urls';
import styles from '@/entities/website/Footer/styles/website-footer.module.css';

export default function FooterNavigation() {
    return (
        <Group
            justify="space-between"
            align="flex-start"
            className={styles.footerNavigationContainer}
        >
            <Flex className={styles.footerNavigationItems}>
                {websiteSections.slice(0, 4).map(({ label, link }) => (
                    <FooterNavigationSection
                        key={label}
                        label={label}
                        link={link}
                    />
                ))}
            </Flex>

            <Flex className={styles.footerNavigationItems}>
                {websiteSections.slice(4).map(({ label, link }) => (
                    <FooterNavigationSection
                        key={label}
                        label={label}
                        link={link}
                    />
                ))}
            </Flex>
        </Group>
    );
}
