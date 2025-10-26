'use client';

import { Drawer as MantineDrawer } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

import { Button } from './Button';
import type { DrawerProps } from '../types/drawerType';

export default function Drawer({
    title,
    CustomButton,
    targetButtonTitle,
    children,
    isOpened,
    close,
    ...rest
}: DrawerProps) {
    const [localOpened, { open, close: localClose }] = useDisclosure(false);

    const opened = isOpened ?? localOpened;
    const handleClose = close ?? localClose;

    return (
        <>
            <MantineDrawer
                opened={opened}
                onClose={handleClose}
                title={title}
                {...rest}
            >
                {children}
            </MantineDrawer>

            {CustomButton && <CustomButton onClick={open} />}

            {targetButtonTitle && !isOpened && !close && (
                <Button onClick={open}>
                    <p>{targetButtonTitle}</p>
                </Button>
            )}
        </>
    );
}
