import * as React from 'react';

import Icon from '@/shared/components/Icon';
import type { IconProps } from '@/shared/types/icon';

export default function FilterIcon({ width, height, color, mode }: IconProps) {
    return (
        <Icon
            width={width}
            height={height}
            color={color}
            mode={mode}
            path={
                <>
                    <path d="M2.17.056A1 1 0 0 1 2.5 0h13a1 1 0 0 1 .331.056 2 2 0 0 1 1 3c-.027.041-.058.08-.091.117L12 8.387V15a1 1 0 0 1-1.6.8l-4-3A1 1 0 0 1 6 12V8.387L1.26 3.173a1 1 0 0 1-.09-.117 2 2 0 0 1 1-3ZM2.896 2 7.74 7.327A1 1 0 0 1 8 8v3.5l2 1.5V8a1 1 0 0 1 .26-.673L15.103 2H2.897Z" />
                    <path d="M2.17.056A1 1 0 0 1 2.5 0h13a1 1 0 0 1 .331.056 2 2 0 0 1 1 3c-.027.041-.058.08-.091.117L12 8.387V15a1 1 0 0 1-1.6.8l-4-3A1 1 0 0 1 6 12V8.387L1.26 3.173a1 1 0 0 1-.09-.117 2 2 0 0 1 1-3ZM2.896 2 7.74 7.327A1 1 0 0 1 8 8v3.5l2 1.5V8a1 1 0 0 1 .26-.673L15.103 2H2.897Z" />
                </>
            }
        />
    );
}
