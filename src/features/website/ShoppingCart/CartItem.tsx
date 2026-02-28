import { Group, Stack, Text, Title } from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';

import type { OpenModalPayload } from '@/core/store/modalWindowSlice';
import type { CartItem } from '@/core/store/ShoppingCartSlice';
import { useAppStore } from '@/core/store/store';
import { Price } from '@/features/website/Product/Price';
import EditCartItemContent from '@/features/website/ShoppingCart/EditCartItemContent';

import styles from './styles/shoppingCart.module.scss';
import { Button } from '../../../shared/components/Button';
import { website } from '../../../shared/constants/urls';

interface Props {
    item: CartItem;
    openModal: (payload: OpenModalPayload) => void;
    closeModal: () => void;
}

export default function CartItem({ item, openModal, closeModal }: Props) {
    const { removeItem, updateQuantity } = useAppStore(
        (state) => state.shoppingCart
    );
    const { name, id, price, discountPrice, quantity } = item;

    const updateItemQuantity = (updatedQuantity: number) =>
        updateQuantity(id, updatedQuantity);

    return (
        <Group gap="lg" p="lg" className={styles.shoppingCart__cartItem}>
            <Link
                href={`${website.products}/${id}`}
                className={styles.imageWrapper}
            >
                <Image
                    src="https://customwheelbuilder.com/cdn/shop/products/Screenshot2021-08-139.36.38AM_4337d2e9-b2d8-40f3-9d1d-1e06813ae497_540x.png?v=1628878170"
                    height={155}
                    width={155}
                    alt="image"
                    className={styles.shoppingCart__cartItem__image}
                />
            </Link>

            <Stack className={styles.shoppingCart__cartItem__content}>
                <Group
                    justify="space-between"
                    className={styles.shoppingCart__cartItem__header}
                >
                    <Link
                        href={`${website.products}/${id}`}
                        style={{ textDecoration: 'none' }}
                    >
                        <Title
                            c="gray.8"
                            fw={400}
                            fz="28px"
                            className={styles.title}
                        >
                            {name}
                        </Title>
                    </Link>

                    <Price
                        price={quantity * price}
                        discountPrice={
                            discountPrice ? quantity * discountPrice : undefined
                        }
                    />
                </Group>

                <Group
                    gap="xs"
                    className={styles.shoppingCart__cartItem__quantityRow}
                >
                    <Text>{`Кількість: ${quantity}`}</Text>
                    <Text>(ціна за 1:</Text>
                    <Price
                        price={price}
                        discountPrice={discountPrice ?? undefined}
                        small
                    />
                    <Text>)</Text>
                </Group>

                <Group className={styles.shoppingCart__cartItem__actions}>
                    <Button
                        variant="invisible"
                        td="underline"
                        onClick={() =>
                            openModal({
                                content: (
                                    <EditCartItemContent
                                        item={item}
                                        quantity={quantity}
                                        updateQuantity={updateItemQuantity}
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
