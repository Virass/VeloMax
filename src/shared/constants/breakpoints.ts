import bp from './breakpoints.json';

export const BREAKPOINTS = bp as {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
};
export type Breakpoints = typeof BREAKPOINTS;
