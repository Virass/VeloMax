import * as React from 'react';

import Icon from '@/shared/components/Icon';
import type { IconProps } from '@/shared/types/icon';

export default function LeftArrowIcon({
    width,
    height,
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
                <path d="M5.707.293a1 1 0 0 1 0 1.414L3.414 4H15a1 1 0 1 1 0 2H3.414l2.293 2.293a1 1 0 1 1-1.414 1.414l-4-4a1 1 0 0 1 0-1.414l4-4a1 1 0 0 1 1.414 0Z" />
            }
        />
    );
}
