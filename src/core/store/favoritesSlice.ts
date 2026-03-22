import type { Product } from '@/shared/types/productType';

import type { StoreStateType } from './store';

type FavoritesSliceState = {
    items: Product[];
};

type FavoritesSliceActions = {
    toggleFavorite: (product: Product) => void;
    isFavorite: (id: string) => boolean;
    clearFavorites: () => void;
};

export type FavoritesSlice = FavoritesSliceState & FavoritesSliceActions;

export const createFavoritesSlice: StoreStateType<FavoritesSlice> = (
    set,
    get
) => ({
    items: [],

    toggleFavorite: (product) => {
        const exists = get().favorites.items.some(
            (item) => item.id === product.id
        );

        if (exists) {
            set((state) => {
                state.favorites.items = state.favorites.items.filter(
                    (item) => item.id !== product.id
                );
            });
        } else {
            set((state) => {
                state.favorites.items.push(product);
            });
        }
    },

    isFavorite: (id) => get().favorites.items.some((item) => item.id === id),

    clearFavorites: () => {
        set((state) => {
            state.favorites.items = [];
        });
    },
});
