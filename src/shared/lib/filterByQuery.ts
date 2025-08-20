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
