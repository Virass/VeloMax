'use client';

import { Stack, Text } from '@mantine/core';
import {} from '@mantine/hooks';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Phones } from '@/shared/components/Phones';
import PopUpShell from '@/shared/components/PopUpShell/PopUpShell';
import { HEADER_NAV_LINKS } from '@/shared/constants/urls';

type Props = { opened: boolean; onClose: () => void };

export const DrawerMenu = ({ opened, onClose }: Props) => {
    const pathname = usePathname();

    return (
        <PopUpShell isOpened={opened} close={onClose} centeredContent>
            <Stack
                gap={24}
                align="center"
                style={{ width: '100%', overflowY: 'auto' }}
                ff="inherit"
            >
                {Object.values(HEADER_NAV_LINKS).map((l) => (
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
        </PopUpShell>
    );
};
