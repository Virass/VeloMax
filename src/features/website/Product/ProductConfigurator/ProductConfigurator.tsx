import { Stack } from '@mantine/core';

import { AvailableColors } from '../AvailableColors';
import { QuantitySelection } from '../QuantitySelection';
import styles from '../styles/product.module.scss';

interface Props {
    colors?: string[];
    amount: number | string;
    availability?: boolean;
}

export default function ProductConfigurator({
    colors,
    amount,
    availability,
}: Props) {
    return (
        <Stack className={styles.productContentContainer__productConfiguration}>
            {colors && <AvailableColors colors={colors} />}

            {availability && (
                <QuantitySelection
                    maxQuantity={amount}
                    availability={availability}
                />
            )}
        </Stack>
    );
}
