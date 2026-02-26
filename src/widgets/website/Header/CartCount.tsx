import { Badge } from '@mantine/core';

import styles from './styles/HeaderDesktop.module.scss';

interface Props {
    cartItemCount: number;
    topRightCornerPlacement?: boolean;
}

export default function CartCount({
    cartItemCount,
    topRightCornerPlacement,
}: Props) {
    return (
        <Badge
            color="red"
            variant="filled"
            circle
            ml={4}
            size="xs"
            className={
                topRightCornerPlacement
                    ? styles.badge__topRightCorner
                    : styles.badge
            }
        >
            {cartItemCount}
        </Badge>
    );
}
