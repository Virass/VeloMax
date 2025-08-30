import { URLs } from '@/shared/constants/urls';
import { redirect, RedirectType } from 'next/navigation';

export default function NotFoundPage() {
    redirect(URLs.website.notFound, RedirectType.push);
}
