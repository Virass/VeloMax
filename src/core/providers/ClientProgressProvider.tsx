'use client';
import { AppProgressProvider as ProgressProvider } from '@bprogress/next';


export const CustomProgressProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    return (
        <ProgressProvider
            height="8px"
            color="#000"
            options={{ showSpinner: false }}
            shallowRouting
        >
            {children}
        </ProgressProvider>
    );
};
