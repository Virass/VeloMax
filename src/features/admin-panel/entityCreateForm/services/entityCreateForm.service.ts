import type { Category } from '@/shared/types/category';
import type {
    CategoryFormData,
    ProductFormData,
} from '@/shared/types/newEntityFormTypes';
import type { Product } from '@/shared/types/product';

import { addCategory } from '../../categories/services/categories.service';
import { addProduct } from '../../products/services/products.service';

export async function addEntity(
    entity: ProductFormData | CategoryFormData,
    catalog: 'product' | 'category'
) {
    const prepareEntity = () => ({
        ...entity,
        id: Math.random(),
    });

    try {
        if (catalog === 'product') {
            await addProduct(prepareEntity() as Product);
        } else {
            await addCategory(prepareEntity() as Category);
        }
        console.log(`${catalog} successfully added!`);
    } catch (error) {
        console.error(`Failed to add ${catalog}:`, error);
    }
}
