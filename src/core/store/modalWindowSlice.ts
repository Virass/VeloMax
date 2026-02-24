import type { StoreStateType } from './store';

export enum ModalSize {
    sm = 'sm',
    md = 'md',
    lg = 'lg',
    full = 'full',
}

type ModalWindowSliceState = {
    isModalOpen: boolean;
    title?: string;
    content: React.ReactNode;
    size: ModalSize;
};

export type OpenModalPayload = {
    title?: string;
    content: React.ReactNode;
};

type ModalWindowSliceActions = {
    openModal(payload: OpenModalPayload): void;
    closeModal(): void;
};

export type ModalWindowSlice = ModalWindowSliceState & ModalWindowSliceActions;

const initialState = {
    isModalOpen: false,
    title: '',
    content: null,
    size: ModalSize.md,
};

export const createModalWindowSlice: StoreStateType<ModalWindowSlice> = (
    set
) => ({
    ...initialState,

    openModal: ({ content }) => {
        set((state) => {
            state.modalWindow = {
                ...state.modalWindow,
                isModalOpen: true,
                content,
            };
        });
    },

    closeModal: () => {
        set((state) => {
            state.modalWindow = { ...state.modalWindow, ...initialState };
        });
    },
});
