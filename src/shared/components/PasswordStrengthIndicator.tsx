import { Group, Progress } from '@mantine/core';

interface Props {
    passwordValue: string;
}

export default function PasswordStrengthIndicator({ passwordValue }: Props) {
    const requirements = [
        { re: /[0-9]/, label: 'Includes number' },
        { re: /[a-z]/, label: 'Includes lowercase letter' },
        { re: /[A-Z]/, label: 'Includes uppercase letter' },
        { re: /[$&+,:;=?@#|'<>.^*()%!-]/, label: 'Includes special symbol' },
    ];

    const getStrength = (value: string) => {
        if (value.length < 6) {
            return 10;
        }

        let metCount = 0;

        requirements.forEach((requirement) => {
            if (requirement.re.test(value)) {
                metCount += 1;
            }
        });

        const lengthBonus = value.length > 10 ? 1 : 0;

        const totalPoints = metCount + lengthBonus;
        const score = (totalPoints / (requirements.length + 1)) * 100;

        return Math.min(Math.max(score, 10), 100);
    };

    const getStrengthColor = (strength: number) => {
        switch (true) {
            case strength < 30:
                return 'red';
            case strength < 50:
                return 'orange';
            case strength < 70:
                return 'yellow';
            default:
                return 'teal';
        }
    };

    const strength = getStrength(passwordValue);
    const color = getStrengthColor(strength);

    return (
        <Group grow gap={5} mt="xs">
            <Progress
                size="xs"
                color={color}
                value={passwordValue.length > 0 ? 100 : 0}
                transitionDuration={0}
            />
            <Progress
                size="xs"
                color={color}
                transitionDuration={0}
                value={strength < 30 ? 0 : 100}
            />
            <Progress
                size="xs"
                color={color}
                transitionDuration={0}
                value={strength < 50 ? 0 : 100}
            />
            <Progress
                size="xs"
                color={color}
                transitionDuration={0}
                value={strength < 70 ? 0 : 100}
            />
        </Group>
    );
}
