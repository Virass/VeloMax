import type { ReactNode } from 'react';

import type { DrawerProps } from '@/shared/types/drawerType';

import Drawer from '../Drawer';
import styles from './styles/popUpShell.module.scss';

export interface Props extends DrawerProps {
    children: ReactNode;
    isOpened?: boolean;
    close?: () => void;
    centeredContent?: boolean;
}

export default function PopUpShell({
    children,
    isOpened,
    close,
    centeredContent,
    ...rest
}: Props) {
    const { content, header, body, overlay } = styles;

    return (
        <Drawer
            isOpened={isOpened}
            close={close}
            withCloseButton={false}
            classNames={{
                content,
                header,
                body: centeredContent ? body : '',
                overlay,
            }}
            {...rest}
        >
            {children}
        </Drawer>
    );
}
