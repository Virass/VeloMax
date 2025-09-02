import Icon from '@/shared/components/Icon';
import type { IconProps } from '@/shared/types/icon';

export default function FacebookIcon({
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
                    <path d="M4.757 1.757A6 6 0 0 1 9 0h3a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H9v1h3a1 1 0 0 1 .97 1.243l-1 4A1 1 0 0 1 11 13H9v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-6H1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h2V6a6 6 0 0 1 1.757-4.243ZM9 2a4 4 0 0 0-4 4v2a1 1 0 0 1-1 1H2v2h2a1 1 0 0 1 1 1v6h2v-6a1 1 0 0 1 1-1h2.22l.5-2H8a1 1 0 0 1-1-1V6a2 2 0 0 1 2-2h2V2H9Z" />
                    <path d="M4.757 1.757A6 6 0 0 1 9 0h3a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H9v1h3a1 1 0 0 1 .97 1.243l-1 4A1 1 0 0 1 11 13H9v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-6H1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h2V6a6 6 0 0 1 1.757-4.243ZM9 2a4 4 0 0 0-4 4v2a1 1 0 0 1-1 1H2v2h2a1 1 0 0 1 1 1v6h2v-6a1 1 0 0 1 1-1h2.22l.5-2H8a1 1 0 0 1-1-1V6a2 2 0 0 1 2-2h2V2H9Z" />
                </>
            }
            {...rest}
        />
    );
}
