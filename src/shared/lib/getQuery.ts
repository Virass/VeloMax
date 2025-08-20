export async function getQuery(searchParams?: Promise<{ query?: string }>) {
    const resolvedSearchParams = await searchParams;

    const query = resolvedSearchParams?.query || '';

    return query;
}
