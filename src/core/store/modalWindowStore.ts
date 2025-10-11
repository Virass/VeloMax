import { create } from 'zustand';

export enum ModalSize {
    sm = 'sm',
    md = 'md',
    lg = 'lg',
    full = 'full',
}

type ModalWindowType = {
    isModalOpen: boolean;
    title?: string;
    content: React.ReactNode;
    size: ModalSize;
};

type OpenModalPayload = {
    title?: string;
    content: React.ReactNode;
};

type ModalWindowStoreActions = {
    openModal(payload: OpenModalPayload): void;
    closeModal(): void;
};

export type ModalWindowStoreType = ModalWindowType & ModalWindowStoreActions;

const initialState = {
    isModalOpen: false,
    content: null,
    size: ModalSize.md,
};

export const useModalWindow = create<ModalWindowStoreType>((set) => ({
    ...initialState,

    openModal: ({ content }) =>
        set({
            isModalOpen: true,
            content,
        }),

    closeModal: () => set(initialState),
}));
