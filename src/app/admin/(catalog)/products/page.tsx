import { Products } from '@/features/admin-panel/products';
import { getQuery } from '@/shared/lib/getQuery';

export default async function ProductsPage({
    searchParams,
}: {
    searchParams?: Promise<{ query?: string }>;
}) {
    const query = await getQuery(searchParams);

    return <Products query={query} />;
}
