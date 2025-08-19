import React from 'react';

interface PhoneIconProps {
    width?: number;
    height?: number;
    color?: string;
}

export const PhoneIcon: React.FC<PhoneIconProps> = ({
    width = 24,
    height = 24,
    color = 'currentColor',
}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            viewBox="0 0 24 24"
        >
            <path
                fill="none"
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"
            />
        </svg>
    );
};
