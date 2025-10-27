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
            color="gray"
            variant="filled"
            // right="-12px"
            // top="-5px"
            // pos="absolute"
            circle
            ml={4}
            className={
                topRightCornerPlacement
                    ? styles.badge
                    : styles.badge__topRightCorner
            }
        >
            {cartItemCount}
        </Badge>
    );
}
