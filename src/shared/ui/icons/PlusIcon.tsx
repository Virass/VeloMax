import * as React from 'react';

import Icon from '@/shared/components/Icon';
import type { IconProps } from '@/shared/types/icon';

export default function PlusIcon({
    width = 24,
    height = 24,
    color,
    mode,
}: IconProps) {
    return (
        <Icon
            width={width}
            height={height}
            color={color}
            mode={mode}
            path={
                <g transform="translate(4 4)">
                    <path d="M8 0a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2H9v6a1 1 0 1 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 1-1Z" />
                </g>
            }
        />
    );
}
