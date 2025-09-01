import Icon from '@/shared/components/Icon';
import type { IconProps } from '@/shared/types/icon';

export default function SearchIcon({ width, height, color, mode }: IconProps) {
    return (
        <Icon
            width={width}
            height={height}
            color={color}
            mode={mode}
            path={
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0" />
            }
        />
    );
}
