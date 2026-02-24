import { Stack } from '@mantine/core';

import CheckoutActionButtons from '@/shared/components/CheckoutActionButtons';
import { website } from '@/shared/constants/urls';

import CartTotal from '../../../shared/components/CartTotal';
import styles from '../ShoppingCart/styles/shoppingCart.module.scss';

interface Props {
    totalPrice: number;
    inShoppingCart?: boolean;
    closeDrawer: () => void;
}

export default function CartDrawerCheckout({
    totalPrice,
    inShoppingCart,
    closeDrawer,
}: Props) {
    return (
        <Stack className={inShoppingCart ? styles.shoppingCart__summary : ''}>
            <CartTotal total={totalPrice} />

            <CheckoutActionButtons
                buttons={[
                    {
                        name: 'Сплатити зараз',
                        href: '#',
                        customColor: 'gray.9',
                        customTextColor: 'white',
                    },
                    {
                        name: 'Перейти до кошика',
                        href: website.cart,
                        action: closeDrawer,
                    },
                ]}
            />
        </Stack>
    );
}
