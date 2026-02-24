type FeatureFlagsKeys = 'PRODUCT_REVIEWS' | 'ANOTHER_FEATURE';

type FeatureFlagsType = {
    [key in FeatureFlagsKeys]: boolean;
};

export const FeatureFlags: FeatureFlagsType = {
    PRODUCT_REVIEWS: false,
    ANOTHER_FEATURE: true,
};
