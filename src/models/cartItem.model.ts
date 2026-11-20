import pool from '../config/database';

export const getCartItems = async (cartId: number) => {
    const result = await pool.query(
        `SELECT 
            ci.id,
            ci.cart_id,
            ci.product_id,
            ci.quantity,
            p.name,
            p.price,
            (p.price * ci.quantity) AS subtotal
         FROM cart_items ci
         INNER JOIN products p ON ci.product_id = p.id
         WHERE ci.cart_id = $1`,
        [cartId]
    );

    return result.rows;
};

export const addCartItem = async (
    cartId: number,
    productId: number,
    quantity: number
) => {
    const result = await pool.query(
        `INSERT INTO cart_items (cart_id, product_id, quantity)
         VALUES ($1, $2, $3)
         ON CONFLICT (cart_id, product_id)
         DO UPDATE SET quantity = cart_items.quantity + EXCLUDED.quantity
         RETURNING *`,
        [cartId, productId, quantity]
    );

    return result.rows[0];
};

export const updateCartItem = async (
    cartId: number,
    productId: number,
    quantity: number
) => {
    const result = await pool.query(
        `UPDATE cart_items
         SET quantity = $1
         WHERE cart_id = $2 AND product_id = $3
         RETURNING *`,
        [quantity, cartId, productId]
    );

    return result.rows[0];
};

export const deleteCartItem = async (
    cartId: number,
    productId: number
) => {
    const result = await pool.query(
        `DELETE FROM cart_items
         WHERE cart_id = $1 AND product_id = $2
         RETURNING *`,
        [cartId, productId]
    );

    return result.rows[0];
};