import * as React from 'react';

import Icon from '@/shared/components/Icon';
import type { IconProps } from '@/shared/types/icon';

export default function RightArrowIcon({
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
                <path d="M11.91 6.077a.833.833 0 0 1 1.18 0l3.333 3.334a.833.833 0 0 1 0 1.178l-3.334 3.333a.833.833 0 0 1-1.178-1.178l1.91-1.91H4.168a.833.833 0 0 1 0-1.667h9.654l-1.91-1.911a.833.833 0 0 1 0-1.179Z" />
            }
        />
    );
}
