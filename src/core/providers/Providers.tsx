import { BREAKPOINTS } from "@/shared/constants/breakpoints";
import { MantineProvider } from "@mantine/core";
import { CustomProgressProvider } from "./ClientProgressProvider";

export const Providers = ({ children }: { children: React.ReactNode }) => {
    return (
        <CustomProgressProvider>
            <MantineProvider
                theme={{
                    fontFamily: 'var(--font-roboto), system-ui, sans-serif',
                    headings: { fontFamily: 'var(--font-roboto)' },
                    breakpoints: BREAKPOINTS,
                }}
            >
                {children}
            </MantineProvider>
        </CustomProgressProvider>
    );
};
