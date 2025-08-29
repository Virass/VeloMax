import { URLs } from "@/shared/constants/urls";
import { redirect, RedirectType } from "next/navigation";

export default function AuthPage() {
    redirect(URLs.auth.signIn, RedirectType.push);
    return;
}
