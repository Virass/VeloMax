const { BREAKPOINTS } = require('./src/shared/config/breakpoints.cjs');

module.exports = {
    plugins: {
        'postcss-preset-mantine': {},
        'postcss-simple-vars': {
            variables: {
                'mantine-breakpoint-xs': BREAKPOINTS.xs,
                'mantine-breakpoint-sm': BREAKPOINTS.sm,
                'mantine-breakpoint-md': BREAKPOINTS.md,
                'mantine-breakpoint-lg': BREAKPOINTS.lg,
                'mantine-breakpoint-xl': BREAKPOINTS.xl,
            },
        },
    },
};
