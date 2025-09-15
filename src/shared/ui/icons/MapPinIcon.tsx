import * as React from 'react';

import Icon from '@/shared/components/Icon';
import type { IconProps } from '@/shared/types/icon';

export default function MapPinIcon({ width, height, color, mode }: IconProps) {
    return (
        <Icon
            width={width}
            height={height}
            color={color}
            mode={mode}
            path={
                <path d="M12 4a7 7 0 0 0-4.95 11.95l4.244 4.242a1 1 0 0 0 1.413 0l4.243-4.242A7 7 0 0 0 12 4Zm-5-.483a9 9 0 0 1 11.364 13.847l-4.243 4.243a3.001 3.001 0 0 1-4.24 0l-4.245-4.243A9 9 0 0 1 7 3.517ZM12 9a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-4 2a4 4 0 1 1 8 0 4 4 0 0 1-8 0Z" />
            }
        />
    );
}
