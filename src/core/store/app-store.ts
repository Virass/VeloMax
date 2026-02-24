import type { StoreStateType } from './store';

export type AppSliceState = {
    someKey: string;
};

type AppSliceActions = {
    restoreState(): void;
};

export type AppSlice = AppSliceState & AppSliceActions;

const defaultValues: AppSliceState = {
    someKey: 'defaultValue',
};

export const createAppSlice: StoreStateType<AppSlice> = (set, _get) => ({
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
