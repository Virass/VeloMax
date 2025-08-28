export type ContactPhone = BasicEntity & {
    phoneNumber: string;
    provider: 'Kyivstar' | 'Vodafone' | 'Lifecell';
};

export type SiteSettings = {
    siteName: string;
    siteDescription: string;
    contactPhones: ContactPhone[];
    email: string;
    socialLinks: {
        facebook?: string;
        instagram?: string;
        telegram?: string;
    };
    seoTitle: string;
    seoDescription: string;
    seoKeywords: string[];
};

export type PromoCode = BasicEntity & {
    code: string;
    description?: string;
    discountPercentage: number;
    validFrom: Date;
    validUntil: Date;
    isActive: boolean;
    usageLimit?: number;
    usedCount: number;
};
