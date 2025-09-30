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
    viewBox = `0 0 ${width} ${height}`,
    path,
    ...rest
}: Props) {
    const resolvedColor = resolveMantineColor(color);

    return (
        <svg
            width={width}
            height={height}
            viewBox={viewBox}
            {...{ [mode]: resolvedColor }}
            {...rest}
        >
            {path}
        </svg>
    );
}
