import {
    createCart,
    getCartById
} from '../models/cart.model';

export const createCartService = async () => {
    return await createCart();
};

export const getCartService = async (id: number) => {
    return await getCartById(id);
};