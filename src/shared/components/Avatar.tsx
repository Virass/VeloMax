import { Avatar as MantineAvatar, Text } from '@mantine/core';

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
        <MantineAvatar>
            <Text tt="uppercase" fw="700" c="gray.9">
                {getAvatar()}
            </Text>
        </MantineAvatar>
    );
}
