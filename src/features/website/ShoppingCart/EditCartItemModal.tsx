import type { ReactNode } from 'react';

import Modal from '@/shared/components/Modal/Modal';

interface Props {
    closeModal: () => void;
    content: ReactNode;
    isModalOpen: boolean;
}

export default function EditCartItemModal({
    closeModal,
    content,
    isModalOpen,
}: Props) {
    return (
        <Modal
            title="Редагування товару"
            withCloseButton
            opened={isModalOpen}
            onClose={closeModal}
            modalContent={content}
        />
    );
}
