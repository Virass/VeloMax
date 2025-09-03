import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    /* config options here */
    devIndicators: false,

    // for example purposes. REMOVE once real images are ready.
    images: {
        domains: ['customwheelbuilder.com'],
    },
};

export default nextConfig;
