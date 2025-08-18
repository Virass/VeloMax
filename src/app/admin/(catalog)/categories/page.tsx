import { Categories } from '@/features/admin-panel/categories';
import { getQuery } from '@/features/admin-panel/helpers';

export default async function CategoriesPage({
    searchParams,
}: {
    searchParams?: Promise<{ query?: string }>;
}) {
    const query = await getQuery(searchParams);

    return <Categories query={query} />;
}
