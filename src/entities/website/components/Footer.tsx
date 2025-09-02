import { Box, Group, Stack, Text } from '@mantine/core';

import { FooterContacts } from '@/features/website/footerContacts';
import { FooterFeedbackForm } from '@/features/website/footerFeedbackForm';
import { FooterLogoAndSocialsSection } from '@/features/website/footerLogoAndSocialsSection';
import { FooterNavigation } from '@/features/website/footerNavigation';
import { FooterPolicy } from '@/features/website/footerPolicy';
import styles from '@/shared/styles/website-footer.module.css';

export default function Footer() {
    return (
        <Box component="footer">
            <Stack gap="xs" hiddenFrom="lg">
                <FooterFeedbackForm />

                <Stack className={styles.footerBlock} gap="lg">
                    <FooterNavigation />

                    <FooterContacts />

                    <FooterLogoAndSocialsSection />

                    <FooterPolicy />
                </Stack>
            </Stack>

            <Group
                justify="space-between"
                visibleFrom="lg"
                className={styles.footerBlock}
            >
                <Stack>
                    <FooterLogoAndSocialsSection />
                    <FooterPolicy />
                </Stack>

                <Group>
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
            </Group>
        </Box>
    );
}
