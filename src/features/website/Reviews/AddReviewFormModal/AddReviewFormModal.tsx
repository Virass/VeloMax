'use client';

import { useAppStore } from '@/core/store/store';
import Modal from '@/shared/components/Modal/Modal';

import { AddReviewButton } from '../AddReviewButton';
import { AddReviewForm } from '../AddReviewForm';

export default function AddReviewFormModal() {
    const { openModal, closeModal, content, isModalOpen } = useAppStore(
        (state) => state.modalWindow
    );

    return (
        <>
            <AddReviewButton
                onClick={() =>
                    openModal({
                        content: <AddReviewForm />,
                    })
                }
            />

            <Modal
                withCloseButton
                modalContent={content}
                opened={isModalOpen}
                onClose={closeModal}
            />
        </>
    );
}
