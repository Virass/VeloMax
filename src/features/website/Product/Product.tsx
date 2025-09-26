import { getProduct } from './services/product.service';

interface Props {
    id: string;
}

export default async function Product({ id }: Props) {
    const product = await getProduct(id);

    return <div>{`The product name is ${product?.name}`}</div>;
}
