import { redirect, RedirectType } from 'next/navigation';

import { URLs } from '@/shared/constants/urls';

export default function NotFoundPage() {
    redirect(URLs.website.notFound, RedirectType.push);
}
