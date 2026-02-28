export const getTotalUnitPrice = (
    quantity: number,
    discountPrice: number | undefined,
    price: number
) => {
    const unitPrice = discountPrice ?? price;
    const safeQuantity =
        Number.isFinite(quantity) && quantity > 0 ? quantity : 1;

    return unitPrice * safeQuantity;
};
