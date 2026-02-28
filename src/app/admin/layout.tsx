import type { PropsWithChildren } from 'react';

import { requireManagerAccess } from '@/shared/lib/authGuard';
import AdminShell from '@/widgets/admin/AppShellLayout';

export default function AdminPanelLayout({ children }: PropsWithChildren) {
    requireManagerAccess();

    return <AdminShell>{children}</AdminShell>;
}
