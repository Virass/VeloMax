export type Product = BasicEntity & {
    name: string;
    categoryId: string;
    article: string;
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
