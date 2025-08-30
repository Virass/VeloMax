export function createLookupMap<T, K extends keyof T>(
    array: T[],
    key: K
): Record<string, T> {
    return Object.fromEntries(
        array.map((item) => [item[key] as unknown as string, item])
    );
}
