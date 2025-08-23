'use client';

import { useState, useEffect } from 'react';

interface FetchResult<T> {
    data: T | null;
    loading: boolean;
    error: string | null;
}

export function useFetch<T>(
    fetcher: () => Promise<T>,
    deps: any[] = []
): FetchResult<T> {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            setError(null);

            try {
                const result = await fetcher();

                setData(result);
            } catch (err) {
                setError((err as Error).message);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, deps);

    return { data, loading, error };
}
