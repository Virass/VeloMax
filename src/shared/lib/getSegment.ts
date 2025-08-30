//TODO Delete this function after Vlad gives a response
export function getSegment(
    path: string,
    options: {
        ignoreRoot?: boolean;
        limit?: number;
    } = { ignoreRoot: false }
) {
    const { ignoreRoot, limit } = options;
    let parts = path.split('/').filter(Boolean);

    if (ignoreRoot) {
        parts = parts.slice(1);
    }

    const index = limit
        ? Math.min(parts.length - 1, limit - 1)
        : parts.length - 1;

    return parts[index];
}
