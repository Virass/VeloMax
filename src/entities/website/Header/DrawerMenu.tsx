import { Drawer, Stack, Text } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Phones } from '@/shared/components/Phones';
import { BREAKPOINTS } from '@/shared/constants/breakpoints';
import { NAV_LINKS } from '@/shared/constants/urls';

type Props = { opened: boolean; onClose: () => void };

export const DrawerMenu = ({ opened, onClose }: Props) => {
    const pathname = usePathname();
    const isSm = useMediaQuery(`(min-width: ${BREAKPOINTS.sm})`);

    return (
        <Drawer
            opened={opened}
            onClose={onClose}
            withCloseButton={false}
            overlayProps={{ backgroundOpacity: 0, blur: 0 }}
            styles={{
                content: {
                    position: 'fixed',
                    top: isSm ? '68px' : '64px',
                    left: '4.45vw',
                    right: '4.45vw',
                    height: '78vh',
                    maxHeight: '78vh',
                    background: '#ffffff66',
                    backdropFilter: 'blur(8px)',
                    WebkitBackdropFilter: 'blur(8px)',
                    border: '2px solid rgba(255,255,255,1)',
                    borderRadius: 28,
                    overflow: 'hidden',
                    fontFamily: 'inherit',
                },
                header: { background: 'transparent', border: 'none' },
                body: {
                    height: '100%',
                    padding: 20,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                },
                overlay: { background: 'transparent' },
            }}
        >
            <Stack
                gap={24}
                align="center"
                style={{ width: '100%', overflowY: 'auto' }}
                ff="inherit"
            >
                {Object.values(NAV_LINKS).map((l) => (
                    <Link
                        key={l.href}
                        href={l.href}
                        onClick={onClose}
                        style={{
                            textDecoration: 'none',
                            outline: 'none',
                        }}
                    >
                        <Text
                            fw={pathname === l.href ? 600 : 400}
                            size="lg"
                            c="#212529"
                            p={8}
                            style={{
                                textAlign: 'center',
                                textTransform: 'capitalize',
                            }}
                        >
                            {l.label}
                        </Text>
                    </Link>
                ))}

                <Phones align="center" iconSize={24} />
            </Stack>
        </Drawer>
    );
};
