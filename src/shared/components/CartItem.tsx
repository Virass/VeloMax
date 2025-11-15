import { Group, Stack, Text, Title } from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';

import type { OpenModalPayload } from '@/core/store/modalWindowStore';
import { useCartStore, type CartItem } from '@/core/store/shoppingCartStore';
import { Price } from '@/features/website/Product/Price';
import EditCartItemContent from '@/features/website/ShoppingCart/EditCartItemContent';

import { Button } from './Button';
import styles from '../../features/website/ShoppingCart/styles/shoppingCart.module.scss';
import { website } from '../constants/urls';
import { useCart } from '../hooks/useCart';

interface Props {
    item: CartItem;
    openModal: (payload: OpenModalPayload) => void;
    closeModal: () => void;
}

export default function CartItem({ item, openModal, closeModal }: Props) {
    const { localQuantity, setLocalQuantity } = useCart(item);
    const { removeItem } = useCartStore();
    const { name, id, price, discountPrice } = item;

    return (
        <Group gap="lg" p="lg" className={styles.shoppingCart__cartItem}>
            <Link href={`${website.products}/${id}`}>
                <Image
                    src="https://customwheelbuilder.com/cdn/shop/products/Screenshot2021-08-139.36.38AM_4337d2e9-b2d8-40f3-9d1d-1e06813ae497_540x.png?v=1628878170"
                    height={155}
                    width={155}
                    alt="image"
                    className={styles.shoppingCart__cartItem__image}
                />
            </Link>

            <Stack flex={1}>
                <Group justify="space-between">
                    <Link
                        href={`${website.products}/${id}`}
                        style={{ textDecoration: 'none' }}
                    >
                        <Title c="gray.8" fw={400} fz="34px">
                            {name}
                        </Title>
                    </Link>

                    <Price
                        price={localQuantity * price}
                        discountPrice={
                            discountPrice
                                ? localQuantity * discountPrice
                                : undefined
                        }
                    />
                </Group>

                <Group gap="0">
                    <Text>{`Кількість: ${localQuantity}`}</Text>(ціна за 1:
                    <Price
                        price={price}
                        discountPrice={
                            discountPrice ? discountPrice : undefined
                        }
                        small
                    />
                    )
                </Group>

                <Group>
                    <Button
                        variant="invisible"
                        td="underline"
                        onClick={() =>
                            openModal({
                                content: (
                                    <EditCartItemContent
                                        item={item}
                                        quantity={localQuantity}
                                        setQuantity={setLocalQuantity}
                                        closeModal={closeModal}
                                    />
                                ),
                            })
                        }
                    >
                        <Text>Редагувати</Text>
                    </Button>
                    <Button variant="invisible" td="underline">
                        <Text onClick={() => removeItem(item.id)}>
                            Прибрати з кошику
                        </Text>
                    </Button>
                </Group>
            </Stack>
        </Group>
    );
}
