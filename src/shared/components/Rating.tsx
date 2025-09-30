import { type RatingProps, Rating as MantineRating } from '@mantine/core';

interface Props extends RatingProps {
    readonly?: boolean;
    value?: number;
}

export default function Rating({ readonly, value, ...rest }: Props) {
    return (
        <MantineRating
            defaultValue={4}
            readOnly={readonly}
            value={value}
            {...rest}
        />
    );
}
