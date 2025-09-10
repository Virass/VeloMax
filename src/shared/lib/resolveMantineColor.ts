import { DEFAULT_THEME } from '@mantine/core';

export const resolveMantineColor = (color: string) => {
    const [shade, variant] = color.split('.');

    if (variant && DEFAULT_THEME.colors[shade]) {
        return DEFAULT_THEME.colors[shade][parseInt(variant, 10)];
    }

    return color;
};
