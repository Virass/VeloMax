/*
    Currently, this function filters data locally from the already fetched dataset
    For the admin page, this approach might be sufficient
    However, ideally, this filtering should be done on the server side
    For now, I am leaving the client-side filtering because the Supabase setup is not ready yet
*/

export function filterByQuery<D>(
    data: D[],
    query: string,
    getComparableValue: (item: D) => string
): D[] {
    return data.filter((item) => {
        const comparableValue = getComparableValue(item).toLowerCase();

        return comparableValue.includes(query.toLowerCase());
    });
}

export async function getQuery(searchParams?: Promise<{ query?: string }>) {
    const resolvedSearchParams = await searchParams;

    const query = resolvedSearchParams?.query || '';

    return query;
}
