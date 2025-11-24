import { useSyncExternalStore } from 'react';

import type { StoreApi } from 'zustand';

export function useStore<T, U>(
    store: StoreApi<T>,
    selector: (state: T) => U
): U {
    return useSyncExternalStore(
        store.subscribe,
        () => selector(store.getState()),
        () => selector(store.getState())
    );
}
