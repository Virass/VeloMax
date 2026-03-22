'use client';

import { ActionIcon, Tooltip } from '@mantine/core';

import { useAppStore } from '@/core/store/store';

import type { Product } from '../types/productType';
import HeartIcon from '../ui/icons/HeartIcon';

interface Props {
    product: Product;
}

export default function AddToFavoritesButton({ product }: Props) {
    const { toggleFavorite, isFavorite } = useAppStore(
        (state) => state.favorites
    );

    const favorite = isFavorite(product.id);

    return (
        <Tooltip
            label={
                favorite
                    ? 'Прибрати зі списку бажаного'
                    : 'Додати до списку бажаного'
            }
        >
            <ActionIcon
                variant={favorite ? 'filled' : 'subtle'}
                color={favorite ? 'red' : 'dark'}
                size="xl"
                radius="xl"
                onClick={() => toggleFavorite(product)}
                style={{
                    border: favorite
                        ? 'none'
                        : '1px solid var(--mantine-color-gray-4)',
                }}
            >
                <HeartIcon color={favorite ? 'white' : 'currentColor'} />
            </ActionIcon>
        </Tooltip>
    );
}
