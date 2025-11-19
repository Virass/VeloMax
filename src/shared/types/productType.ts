type AdditionalModifications = {
    colors?: string[];
    sizes?: string[];
};

export type Product = BasicEntity &
    AdditionalModifications & {
        name: string;
        categoryId: string;
        article: string;
        rating?: number;
        description?: string;
        brand?: string;
        price: number;
        discountPrice?: number;
        coverImageUrl?: string;
        imagesUrls?: string[];
        isActive: boolean;
        isSoldOut?: boolean;
        amount: number | 'unlimited';
    };
