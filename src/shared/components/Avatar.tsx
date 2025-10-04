import { Avatar as MantineAvatar, Text } from '@mantine/core';

import styles from '../../features/website/Reviews/styles/reviews.module.scss';

interface Props {
    name: string;
}

export default function Avatar({ name }: Props) {
    const getAvatar = () => {
        const space = ' ';

        if (name.includes(space)) {
            const [firstName, lastName] = name.split(space);

            return `${firstName.charAt(0)}${lastName.charAt(0)}`;
        }

        return name.charAt(0);
    };

    return (
        <MantineAvatar size="md">
            <Text
                tt="uppercase"
                fw="700"
                c="gray.9"
                className={styles.review__avatarText}
            >
                {getAvatar()}
            </Text>
        </MantineAvatar>
    );
}
