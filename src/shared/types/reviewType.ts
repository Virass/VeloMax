export type Review = BasicEntity & {
    productId: string;
    user: string;
    rating: number;
    title: string;
    comment: string;
};
