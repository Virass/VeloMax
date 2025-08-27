import type { Category } from '@/shared/types/category';
import type {
    CategoryFormData,
    ProductFormData,
} from '@/shared/types/newEntityFormTypes';
import type { Product } from '@/shared/types/product';
import { SINGULAR_CATALOG_NAME } from '@/shared/types/urls';

import { addCategory } from '../../categories/services/categories.service';
import { addProduct } from '../../products/services/products.service';

export async function addEntity(
    entity: ProductFormData | CategoryFormData,
    catalog: SINGULAR_CATALOG_NAME
) {
    const prepareEntity = () => ({
        ...entity,
        id: Math.random(),
    });

    try {
        if (catalog === SINGULAR_CATALOG_NAME.PRODUCTS) {
            await addProduct(prepareEntity() as Product);
        } else {
            await addCategory(prepareEntity() as Category);
        }
    } catch (error) {
        console.error(`Failed to add ${catalog}:`, error);
    }
}
