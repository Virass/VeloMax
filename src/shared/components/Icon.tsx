import type { ReactNode } from 'react';

import { resolveMantineColor } from '../lib/resolveMantineColor';
import type { IconProps } from '../types/icon';

interface Props extends IconProps {
    path: ReactNode;
}

export default function Icon({
    width = 24,
    height = 24,
    color = 'white',
    mode = 'fill',
    path,
    ...rest
}: Props) {
    const resolvedColor = resolveMantineColor(color);

    return (
        <svg
            width={width}
            height={height}
            {...{ [mode]: resolvedColor }}
            {...rest}
        >
            {path}
        </svg>
    );
}
