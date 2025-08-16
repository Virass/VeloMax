import { Product } from "@/shared/types/product";

export async function getProducts(): Promise<Product[]> {
    return new Promise((resolve) => {
        const products: Product[] = [
            {
                id: 1,
                name: 'Roadster 2000',
                brand: 'SpeedX',
                price: 499,
                category: 'Road Bike',
            },
            {
                id: 2,
                name: 'Mountain King',
                brand: 'TrailBlazer',
                price: 799,
                category: 'Mountain Bike',
            },
            {
                id: 3,
                name: 'City Cruiser',
                brand: 'UrbanRide',
                price: 299,
                category: 'City Bike',
            },
            {
                id: 4,
                name: 'Speed Demon',
                brand: 'Velocity',
                price: 1200,
                category: 'Road Bike',
            },
            {
                id: 5,
                name: 'Trail Blazer',
                brand: 'AdventureCo',
                price: 650,
                category: 'Mountain Bike',
            },
        ];

        setTimeout(() => resolve(products), 2000);
    });
}
