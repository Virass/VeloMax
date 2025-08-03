import type { StoreStateType } from "./store";

export enum ModalSize {
    sm = 'sm',
    md = 'md',
    lg = 'lg',
    full = 'full',
}

type ModalWindowType = {
    isModalOpen: boolean;
    title: string;
    content: React.ReactNode | React.ComponentType;
    size: ModalSize;
};

type ModalWindowStoreActions = {
    openModal({ title, content }: { title: string, content: React.ReactNode | React.ComponentType }): void;
    closeModal(): void;
};

export type ModalWindowStoreType = ModalWindowType & ModalWindowStoreActions;

const initialState = {
    isModalOpen: false,
    title: '',
    content: null,
    size: ModalSize.md,
};

export const createModalWindowStore: StoreStateType<ModalWindowStoreType> = (set) => ({
    ...initialState,

    openModal: ({ title, content }) => {
        set((state) => ({
            modalWindow: {
                ...state.modalWindow,
                isModalOpen: true,
                title,
                content,
            }
        }));
    },

    closeModal: () => {
        set((state) => ({
            modalWindow: {
                ...state.modalWindow,
                ...initialState,
            }
        }));
    }
});
