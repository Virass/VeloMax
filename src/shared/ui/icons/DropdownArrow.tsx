import * as React from 'react';

import Icon from '@/shared/components/Icon';
import type { IconProps } from '@/shared/types/icon';

export default function DropdownArrow({
    width,
    height,
    color,
    mode,
    ...rest
}: IconProps) {
    return (
        <Icon
            width={width}
            height={height}
            color={color}
            mode={mode}
            path={
                <>
                    <path d="M5.529 3.529c.26-.26.682-.26.942 0l4 4c.26.26.26.682 0 .942l-4 4a.666.666 0 1 1-.942-.942L9.057 8 5.53 4.471a.667.667 0 0 1 0-.942Z" />
                    <path d="M5.529 3.529c.26-.26.682-.26.942 0l4 4c.26.26.26.682 0 .942l-4 4a.666.666 0 1 1-.942-.942L9.057 8 5.53 4.471a.667.667 0 0 1 0-.942Z" />
                </>
            }
            {...rest}
        />
    );
}
