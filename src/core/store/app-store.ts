import type { StoreStateType } from './store';

export type AppStoreT = {
    someKey: string;
};

type AppStoreActions = {
    restoreState(): void;
};

export type AppStoreType = AppStoreT & AppStoreActions;

const defaultValues: AppStoreT = {
    someKey: 'defaultValue',
};

export const createAppStore: StoreStateType<AppStoreType> = (set, _get) => ({
    ...defaultValues,
    restoreState: () => {
        set((state) => ({
            app: {
                ...state.app,
                ...defaultValues,
            },
        }));
    },
});
