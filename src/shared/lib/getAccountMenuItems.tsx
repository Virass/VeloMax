import type { MenuItem } from '../components/Menu';
import { URLs } from '../constants/urls';
import ArchiveIcon from '../ui/icons/ArchiveIcon';
import NewUserIcon from '../ui/icons/NewUserIcon';
import SignOutIcon from '../ui/icons/SignOutIcon';
import { UserIcon } from '../ui/icons/UserIcon';

export const getAccountMenuItems = (loggedIn: boolean): MenuItem[] => {
    if (loggedIn) {
        return [
            {
                icon: <UserIcon />,
                label: 'Мій кабінет',
                link: URLs.website.profile,
            },
            {
                icon: <ArchiveIcon />,
                label: 'Мої товари',
                link: '',
            },
            {
                icon: <SignOutIcon />,
                label: 'Вийти',
                link: URLs.website.main,
                action: () => console.log('The user has been signed out'),
            },
        ];
    }

    return [
        {
            icon: <UserIcon />,
            label: 'Увійти',
            link: URLs.auth.signIn,
        },
        {
            icon: <ArchiveIcon />,
            label: 'Мої товари',
            link: '',
        },
        {
            icon: <NewUserIcon />,
            label: 'Створити акаунт',
            link: URLs.auth.signUp,
        },
    ];
};
