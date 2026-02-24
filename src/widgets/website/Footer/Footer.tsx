import { Box, Group, Stack, Text } from '@mantine/core';

import { FooterContacts } from '@/widgets/website/Footer/Contacts';
import { FooterFeedbackForm } from '@/widgets/website/Footer/FeedbackForm';
import { FooterLogoAndSocialsSection } from '@/widgets/website/Footer/LogoAndSocialsSection';
import { FooterNavigation } from '@/widgets/website/Footer/Navigation';
import { FooterPolicy } from '@/widgets/website/Footer/Policy';

import styles from './styles/website-footer.module.scss';

export default function Footer() {
    return (
        <Box component="footer">
            <Stack gap="4px" hiddenFrom="lg">
                <FooterFeedbackForm />
                <Stack className={styles.footerContainer} gap="1rem">
                    <FooterNavigation />
                    <FooterContacts />
                    <FooterLogoAndSocialsSection />
                    <FooterPolicy />
                </Stack>
            </Stack>

            <Box className={styles.footerContainer} visibleFrom="lg">
                <Group
                    justify="space-between"
                    m="0 auto"
                    w="100%"
                    maw="1280px" // TODO Перенести цей magic number в об'єкт з розмірами
                >
                    <Stack>
                        <FooterLogoAndSocialsSection />
                        <FooterPolicy />
                    </Stack>
                    <Stack>
                        <FooterFeedbackForm />
                        <FooterNavigation />
                    </Stack>

                    <Stack>
                        <FooterContacts />
                        <Text>
                            Консультації і замовлення з 09:00 до 21:00 щодня
                        </Text>
                    </Stack>
                </Group>
            </Box>
        </Box>
    );
}
