import { redirect, RedirectType } from 'next/navigation';

import { URLs } from '@/shared/constants/urls';

export default function AuthPage() {
    redirect(URLs.auth.signIn, RedirectType.push);
}
