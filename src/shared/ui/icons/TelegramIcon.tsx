import Icon from '@/shared/components/Icon';
import type { IconProps } from '@/shared/types/icon';

export default function TelegramIcon({
    width,
    height,
    color,
    mode = 'stroke',
    ...rest
}: IconProps) {
    return (
        <Icon
            width={width}
            height={height}
            color={color}
            mode={mode}
            strokeWidth={2}
            path={
                <path
                    d="M15 10L11 14L12 15M12 15L17 20L21 4L3 11L7 13L9 19L12 15Z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            }
            {...rest}
        />
    );
}
