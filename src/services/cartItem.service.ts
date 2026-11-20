
import {
    getCartItems,
    addCartItem,
    updateCartItem,
    deleteCartItem
} from '../models/cartItem.model';

export const getCartItemsService = async (cartId: number) => {
    return await getCartItems(cartId);
};

export const addCartItemService = async (
    cartId: number,
    productId: number,
    quantity: number
) => {
    return await addCartItem(cartId, productId, quantity);
};

export const updateCartItemService = async (
    cartId: number,
    productId: number,
    quantity: number
) => {
    return await updateCartItem(cartId, productId, quantity);
};

export const deleteCartItemService = async (
    cartId: number,
    productId: number
) => {
    return await deleteCartItem(cartId, productId);
};