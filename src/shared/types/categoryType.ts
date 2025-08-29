export type Category = BasicEntity & {
    name: string;
    description?: string;
    slug: string;
    imageUrl?: string;
    isActive: boolean;
};
