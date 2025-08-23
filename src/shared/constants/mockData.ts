import type { Category } from '../types/category';
import type { Product } from '../types/product';

export const productsExample: Product[] = [
    {
        id: 1,
        name: 'Roadster 2000',
        brand: 'SpeedX',
        price: 499,
        category: 'Road Bike',
        stock: 1,
        material: 'leather',
        image: 'src/product-image',
    },
    {
        id: 2,
        name: 'Mountain King',
        brand: 'TrailBlazer',
        price: 799,
        category: 'Mountain Bike',
        stock: 1,
        material: 'leather',
        image: 'src/product-image',
    },
    {
        id: 3,
        name: 'City Cruiser',
        brand: 'UrbanRide',
        price: 299,
        category: 'City Bike',
        stock: 1,
        material: 'leather',
        image: 'src/product-image',
    },
    {
        id: 4,
        name: 'Speed Demon',
        brand: 'Velocity',
        price: 1200,
        category: 'Road Bike',
        stock: 1,
        material: 'leather',
        image: 'src/product-image',
    },
    {
        id: 5,
        name: 'Trail Blazer',
        brand: 'AdventureCo',
        price: 650,
        category: 'Mountain Bike',
        stock: 1,
        material: 'leather',
        image: 'src/product-image',
    },
];

export const categoriesExample: Category[] = [
    {
        id: 1,
        name: 'Road Bikes',
        description: 'Lightweight bikes built for speed on paved roads.',
        slug: 'bla bla',
        image: 'src/category-image',
    },
    {
        id: 2,
        name: 'Mountain Bikes',
        description: 'Durable bikes designed for off-road trails.',
        slug: 'bla bla',
        image: 'src/category-image',
    },
    {
        id: 3,
        name: 'City Bikes',
        description: 'Comfortable bikes ideal for urban commuting.',
        slug: 'bla bla',
        image: 'src/category-image',
    },
    {
        id: 4,
        name: 'Hybrid Bikes',
        description: 'Versatile bikes suitable for both road and light trails.',
        slug: 'bla bla',
        image: 'src/category-image',
    },
    {
        id: 5,
        name: 'Electric Bikes',
        description: 'Bikes with electric assist for easier riding.',
        slug: 'bla bla',
        image: 'src/category-image',
    },
];
