export type Service = BasicEntity & {
    name: string;
    description?: string;
    price: number;
    discountPrice?: number;
    durationInMinutes?: number;
    isActive: boolean;
    coverImageUrl?: string;
    imagesUrls?: string[];
};
