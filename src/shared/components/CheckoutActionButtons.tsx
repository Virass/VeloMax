import { Stack } from '@mantine/core';
import Link from 'next/link';

import { Button } from './Button';

interface Button {
    name: string;
    href: string;
    action?: () => void;
    customColor?: string;
    customTextColor?: string;
}

interface Props {
    buttons: Button[];
}

export default function CheckoutActionButtons({ buttons }: Props) {
    return (
        <Stack>
            {buttons.map(
                ({ name, href, action, customColor, customTextColor }) => (
                    <Link
                        key={name}
                        href={href}
                        style={{ textDecoration: 'none' }}
                    >
                        <Button
                            w="100%"
                            bg={customColor}
                            c={customTextColor}
                            onClick={action}
                            size="lg"
                        >
                            {name}
                        </Button>
                    </Link>
                )
            )}
        </Stack>
    );
}
