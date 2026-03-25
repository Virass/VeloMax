import Icon from '@/shared/components/Icon';
import type { IconProps } from '@/shared/types/icon';

export default function ArchiveIcon({
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
                <path
                    fill="currentColor"
                    d="M3 3h18v4H3zm1 5h16v13H4zm5.5 3a.5.5 0 0 0-.5.5V13h6v-1.5a.5.5 0 0 0-.5-.5z"
                />
            }
            {...rest}
        />
    );
}
