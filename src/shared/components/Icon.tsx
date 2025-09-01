import type { ReactNode } from 'react';

import type { IconProps } from '../types/icon';

interface Props extends IconProps {
    path: ReactNode;
}

export default function Icon({
    width = 24,
    height = 24,
    color = '#fff',
    mode = 'fill',
    path,
    ...rest
}: Props) {
    return (
        <svg width={width} height={height} {...{ [mode]: color }} {...rest}>
            {path}
        </svg>
    );
}
