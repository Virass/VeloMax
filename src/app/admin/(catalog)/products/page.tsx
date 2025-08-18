import { getQuery } from '@/features/admin-panel/helpers';
import { Products } from '@/features/admin-panel/products';

export default async function ProductsPage({
    searchParams,
}: {
    searchParams?: Promise<{ query?: string }>;
}) {
    const query = await getQuery(searchParams);

    return <Products query={query} />;
}
