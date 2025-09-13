import * as React from 'react';

import Icon from '@/shared/components/Icon';
import type { IconProps } from '@/shared/types/icon';

export default function RowDisplayDataIcon({
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
                <>
                    <path d="M5 5a1 1 0 0 1 1 1v.01a1 1 0 0 1-2 0V6a1 1 0 0 1 1-1Zm3 1a1 1 0 0 1 1-1h11a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1Zm-3 5a1 1 0 0 1 1 1v.01a1 1 0 1 1-2 0V12a1 1 0 0 1 1-1Zm3 1a1 1 0 0 1 1-1h11a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1Zm-3 5a1 1 0 0 1 1 1v.01a1 1 0 1 1-2 0V18a1 1 0 0 1 1-1Zm3 1a1 1 0 0 1 1-1h11a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1Z" />
                    <path d="M5 5a1 1 0 0 1 1 1v.01a1 1 0 0 1-2 0V6a1 1 0 0 1 1-1Zm3 1a1 1 0 0 1 1-1h11a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1Zm-3 5a1 1 0 0 1 1 1v.01a1 1 0 1 1-2 0V12a1 1 0 0 1 1-1Zm3 1a1 1 0 0 1 1-1h11a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1Zm-3 5a1 1 0 0 1 1 1v.01a1 1 0 1 1-2 0V18a1 1 0 0 1 1-1Zm3 1a1 1 0 0 1 1-1h11a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1Z" />
                </>
            }
        />
    );
}
