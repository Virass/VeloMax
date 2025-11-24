import { Group, Stack, Text, Title } from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';

import type { OpenModalPayload } from '@/core/store/modalWindowStore';
import { useCartStore, type CartItem } from '@/core/store/useShoppingCartStore';
import { Price } from '@/features/website/Product/Price';
import EditCartItemContent from '@/features/website/ShoppingCart/EditCartItemContent';
import { useStore } from '@/shared/hooks/useStore';

import styles from './styles/shoppingCart.module.scss';
import { Button } from '../../../shared/components/Button';
import { website } from '../../../shared/constants/urls';
import { useCart } from '../../../shared/hooks/useCart';

interface Props {
    item: CartItem;
    openModal: (payload: OpenModalPayload) => void;
    closeModal: () => void;
}

export default function CartItem({ item, openModal, closeModal }: Props) {
    const { localQuantity, setLocalQuantity } = useCart(item);
    const removeItem = useStore(useCartStore, (state) => state.removeItem);
    const { name, id, price, discountPrice } = item;

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
                        price={localQuantity * price}
                        discountPrice={
                            discountPrice
                                ? localQuantity * discountPrice
                                : undefined
                        }
                    />
                </Group>

                <Group
                    gap="xs"
                    className={styles.shoppingCart__cartItem__quantityRow}
                >
                    <Text>{`Кількість: ${localQuantity}`}</Text>
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
