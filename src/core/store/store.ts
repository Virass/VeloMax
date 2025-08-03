import { createStore, useStore } from "zustand";
import type { StateCreator } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { createModalWindowStore, type ModalWindowStoreType } from "./modal-window-store";
import { AppStoreType, createAppStore } from "./app-store";

export type StoreType = {
    app: AppStoreType;
    modalWindow: ModalWindowStoreType;
}
export type StoreStateType<T> = StateCreator<StoreType, [["zustand/immer", never], ["zustand/devtools", never]], [], T>;


export const store = createStore<StoreType>()(immer(
    devtools((...args) => ({
        app: createAppStore(...args),
        modalWindow: createModalWindowStore(...args),
    }), {
        enabled: true,
        name: "VeloMax Store",
    })
))

export function useAppStore<T>(selector: (state: StoreType) => T): T {
    return useStore(store, selector);
}