import type { ReactNode } from 'react';

import { Container, Divider, Loader, Stack } from '@mantine/core';

import { Button } from '@/shared/components/Button';
import CrossIcon from '@/shared/ui/icons/CrossIcon';

interface Props {
    children: ReactNode;
    hasMore: boolean;
    loadMore: () => void;
    loading?: boolean;
}

export default function LoadMore({
    children,
    hasMore,
    loadMore,
    loading,
}: Props) {
    return (
        <Stack>
            {children}

            {hasMore && (
                <Container>
                    <Stack w="fit-content" align="stretch" gap={0}>
                        <Button
                            onClick={loadMore}
                            variant="invisible"
                            rightIcon={
                                loading ? (
                                    <Loader color="gray.9" size="xs" />
                                ) : (
                                    <CrossIcon
                                        color="gray.9"
                                        width={16}
                                        height={16}
                                    />
                                )
                            }
                        >
                            {loading
                                ? 'Завантажуємо більше предметів…'
                                : 'Дивитись більше'}
                        </Button>

                        <Divider color="gray.9" />
                    </Stack>
                </Container>
            )}
        </Stack>
    );
}
