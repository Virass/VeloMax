'use client';

import { Button } from '@/shared/components/Button';
import FilterIcon from '@/shared/ui/icons/FilterIcon';

interface Props {
    onClick: () => void;
}

export function FilterDrawerButton({ onClick }: Props) {
    return (
        <Button
            leftIcon={<FilterIcon color="gray.9" height={16} width={16} />}
            variant="invisible"
            onClick={onClick}
        >
            Фільтрувати
        </Button>
    );
}
