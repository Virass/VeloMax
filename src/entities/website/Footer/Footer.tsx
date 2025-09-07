import { Box, Group, Stack, Text } from '@mantine/core';

import { FooterContacts } from '@/entities/website/Footer/Contacts';
import { FooterFeedbackForm } from '@/entities/website/Footer/FeedbackForm';
import { FooterLogoAndSocialsSection } from '@/entities/website/Footer/LogoAndSocialsSection';
import { FooterNavigation } from '@/entities/website/Footer/Navigation';
import { FooterPolicy } from '@/entities/website/Footer/Policy';
import styles from './styles/website-footer.module.css';

export default function Footer() {
    return (
        <Box component="footer">
            <Stack gap="4px" hiddenFrom="lg">
                <FooterFeedbackForm />

                <Stack className={styles.footerContainer} gap="2rem">
                    <FooterNavigation />

                    <FooterContacts />

                    <FooterLogoAndSocialsSection />

                    <FooterPolicy />
                </Stack>
            </Stack>

            <Box className={styles.footerContainer} visibleFrom="lg">
                <Group justify="space-between" className={styles.footerBlock}>
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
