import { createStore, useStore, type StateCreator } from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

import { createAppStore, type AppStoreType } from './app-store';
import {
    createModalWindowStore,
    type ModalWindowStoreType,
} from './modal-window-store';

export type StoreType = {
    app: AppStoreType;
    modalWindow: ModalWindowStoreType;
};
export type StoreStateType<T> = StateCreator<
    StoreType,
    [['zustand/immer', never], ['zustand/devtools', never]],
    [],
    T
>;

export const store = createStore<StoreType>()(
    immer(
        devtools(
            (...args) => ({
                app: createAppStore(...args),
                modalWindow: createModalWindowStore(...args),
            }),
            {
                enabled: true,
                name: 'VeloMax Store',
            }
        )
    )
);

export function useAppStore<T>(selector: (state: StoreType) => T): T {
    return useStore(store, selector);
}
