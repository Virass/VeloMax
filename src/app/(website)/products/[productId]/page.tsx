import { Product } from '@/features/website/Product';

export default async function ProductPage({
    params,
}: {
    params: { productId: string };
}) {
    const { productId } = await params;

    return <Product id={productId} />;
}
