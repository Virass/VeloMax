import Icon from '@/shared/components/Icon';
import type { IconProps } from '@/shared/types/icon';

export default function CrossIcon({
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
                <path d="M6 .667c.368 0 .667.298.667.666v4h4a.667.667 0 1 1 0 1.334h-4v4a.667.667 0 1 1-1.334 0v-4h-4a.667.667 0 0 1 0-1.334h4v-4c0-.368.299-.666.667-.666Z" />
            }
            {...rest}
        />
    );
}
