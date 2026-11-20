import pool from '../config/database';

export const createCart = async () => {
    const result = await pool.query(
        'INSERT INTO carts DEFAULT VALUES RETURNING *'
    );

    return result.rows[0];
};

export const getCartById = async (id: number) => {
    const result = await pool.query(
        `SELECT 
            carts.id,
            carts.created_at,
            COALESCE(
                JSON_AGG(
                    JSON_BUILD_OBJECT(
                        'product_id', products.id,
                        'name', products.name,
                        'price', products.price,
                        'quantity', cart_items.quantity
                    )
                ) FILTER (WHERE cart_items.id IS NOT NULL),
                '[]'
            ) AS items
        FROM carts
        LEFT JOIN cart_items ON carts.id = cart_items.cart_id
        LEFT JOIN products ON cart_items.product_id = products.id
        WHERE carts.id = $1
        GROUP BY carts.id`,
        [id]
    );

    return result.rows[0];
};