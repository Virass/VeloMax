import { createStore, useStore, type StateCreator } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

import { createAppSlice, type AppSlice } from './app-store';
import {
    createModalWindowSlice,
    type ModalWindowSlice,
} from './modalWindowSlice';
import {
    createShoppingCartSlice,
    type ShoppingCartSlice,
} from './ShoppingCartSlice';

export type StoreType = {
    app: AppSlice;
    modalWindow: ModalWindowSlice;
    shoppingCart: ShoppingCartSlice;
};
export type StoreStateType<T> = StateCreator<
    StoreType,
    [
        ['zustand/immer', never],
        ['zustand/devtools', never],
        ['zustand/persist', unknown],
    ],
    [],
    T
>;

export const store = createStore<StoreType>()(
    persist(
        immer(
            devtools(
                (...args) => ({
                    app: createAppSlice(...args),
                    modalWindow: createModalWindowSlice(...args),
                    shoppingCart: createShoppingCartSlice(...args),
                }),
                { enabled: true, name: 'VeloMax Store' }
            )
        ),
        {
            name: 'velomax-storage',
            partialize: (state) => ({ shoppingCart: state.shoppingCart }),
            merge: (persistedState, currentState) => ({
                ...currentState,
                shoppingCart: {
                    ...currentState.shoppingCart,
                    ...(persistedState as any).shoppingCart,
                },
            }),
        }
    )
);

export function useAppStore<T>(selector: (state: StoreType) => T): T {
    return useStore(store, selector);
}
