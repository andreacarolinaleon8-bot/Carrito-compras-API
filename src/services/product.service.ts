import {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
} from '../models/product.model';

export const getProductsService = async () => {
    return await getAllProducts();
};

export const getProductService = async (id: number) => {
    return await getProductById(id);
};

export const createProductService = async (product: any) => {
    return await createProduct(product);
};

export const updateProductService = async (
    id: number,
    product: any
) => {
    return await updateProduct(id, product);
};

export const deleteProductService = async (id: number) => {
    return await deleteProduct(id);
};