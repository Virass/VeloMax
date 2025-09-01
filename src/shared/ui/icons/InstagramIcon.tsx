import Icon from '@/shared/components/Icon';
import type { IconProps } from '@/shared/types/icon';

export default function InstagramIcon({
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
                    <path d="M5 2a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5ZM0 5a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H5a5 5 0 0 1-5-5V5Zm9 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM5 9a4 4 0 1 1 8 0 4 4 0 0 1-8 0Z" />
                    <path d="M5 2a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5ZM0 5a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H5a5 5 0 0 1-5-5V5Zm9 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM5 9a4 4 0 1 1 8 0 4 4 0 0 1-8 0Z" />
                </>
            }
            {...rest}
        />
    );
}
