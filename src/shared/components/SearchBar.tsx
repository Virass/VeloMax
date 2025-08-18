'use client';

import {
    type TextInputProps,
    type MantineSize,
    TextInput,
} from '@mantine/core';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';

import { debounce } from '../lib/debounce';
import SearchIcon from '../ui/icons/SearchIcon';

interface Props extends Omit<TextInputProps, 'value' | 'onChange'> {
    placeholder?: string;
    size?: MantineSize;
    width?: number | string;
}

export default function SearchBar({
    placeholder = 'Search...',
    size = 'sm',
    width = '100%',
    ...rest
}: Props) {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const handleSearch = debounce((term: string) => {
        const params = new URLSearchParams(searchParams);

        if (term) {
            params.set('query', term);
        } else {
            params.delete('query');
        }

        replace(`${pathname}?${params.toString()}`);
    }, 300);

    return (
        <TextInput
            onChange={(e) => handleSearch(e.currentTarget.value)}
            placeholder={placeholder}
            size={size}
            w={width}
            leftSection={<SearchIcon />}
            defaultValue={searchParams.get('query')?.toString()}
            {...rest}
        />
    );
}
