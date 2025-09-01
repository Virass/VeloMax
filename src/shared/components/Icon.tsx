import type { ReactNode } from 'react';

import type { IconProps } from '../types/icon';

interface Props extends IconProps {
    path: ReactNode;
}

export default function Icon({
    width = 24,
    height = 24,
    color = 'currentColor',
    mode = 'fill',
    viewBox = '0 0 17.3395 20',
    path,
    ...rest
}: Props) {
    const svgStyle =
        mode === 'stroke' ? { stroke: color } : { fill: 'none' as const };

    return (
        <svg
            width={width}
            height={height}
            viewBox={viewBox}
            xmlns="http://www.w3.org/2000/svg"
            {...svgStyle}
            {...rest}
        >
            {path}
        </svg>
    );
}
