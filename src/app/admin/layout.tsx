import type { PropsWithChildren } from 'react';

import AdminShell from '@/entities/admin/AppShellLayout';
import { requireManagerAccess } from '@/shared/lib/authGuard';

export default function AdminPanelLayout({ children }: PropsWithChildren) {
    requireManagerAccess();

    return <AdminShell>{children}</AdminShell>;
}
