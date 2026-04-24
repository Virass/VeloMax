import * as React from 'react';

import Icon from '@/shared/components/Icon';
import type { IconProps } from '@/shared/types/icon';

export default function CheckmarkIcon({
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
            viewBox="0 0 9 7"
            path={
                <>
                    <path d="M8.354.146a.5.5 0 0 1 0 .708l-5 5a.5.5 0 0 1-.708 0l-2.5-2.5a.5.5 0 1 1 .708-.708L3 4.793 7.646.146a.5.5 0 0 1 .708 0Z" />
                    <path d="M8.354.146a.5.5 0 0 1 0 .708l-5 5a.5.5 0 0 1-.708 0l-2.5-2.5a.5.5 0 1 1 .708-.708L3 4.793 7.646.146a.5.5 0 0 1 .708 0Z" />
                </>
            }
        />
    );
}
