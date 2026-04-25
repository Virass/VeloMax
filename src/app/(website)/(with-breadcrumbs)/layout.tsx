import { Box } from '@mantine/core';

import Breadcrumbs from '@/shared/components/Breadcrumbs';

export default function BreadcrumbsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Box mb="lg">
                <Breadcrumbs />
            </Box>
            {children}
        </>
    );
}
