import type { ReactNode } from 'react';

import { type ModalProps, Modal as MantineModal } from '@mantine/core';

import modalStyles from './styles/modal.module.scss';
import popUpStyles from '../../components/PopUpShell/styles/popUpShell.module.scss';

interface Props extends ModalProps {
    opened: boolean;
    modalContent: ReactNode;
    onClose: () => void;
}

export default function Modal({
    opened,
    onClose,
    modalContent,
    ...rest
}: Props) {
    return (
        <MantineModal
            {...rest}
            opened={opened}
            onClose={onClose}
            classNames={{
                content: modalStyles.content,
                header: popUpStyles.header,
                overlay: popUpStyles.overlay,
            }}
            centered
        >
            {modalContent}
        </MantineModal>
    );
}
