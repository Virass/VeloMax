import { Text, type ButtonProps } from '@mantine/core';

import { Button } from './Button';

interface Props extends ButtonProps {
    availability: boolean;
}

export default function AddToCartButton({ availability, ...rest }: Props) {
    return (
        <Button
            bdrs="32px"
            bg={`gray.${availability ? '9' : '2'}`}
            disabled={!availability}
            c={availability ? 'white' : 'gray.5'}
            w="100%"
            size="lg"
            {...rest}
        >
            <Text size="18px">Додати до кошика</Text>
        </Button>
    );
}
