export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    stock: number;
}

export interface Cart {
    id: number;
    created_at: Date;
}

export interface CartItem {
    id: number;
    cart_id: number;
    product_id: number;
    quantity: number;
}

export interface CartItemDetail extends CartItem {
    name: string;
    price: number;
    subtotal: number;
}