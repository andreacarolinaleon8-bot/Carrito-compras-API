import { Request, Response } from 'express';

import {
    getCartItemsService,
    addCartItemService,
    updateCartItemService,
    deleteCartItemService
} from '../services/cartItem.service';

export const getCartItemsController = async (req: Request, res: Response) => {
    try {
        const items = await getCartItemsService(Number(req.params.id));
        res.json(items);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al consultar los productos del carrito' });
    }
};

export const addCartItemController = async (req: Request, res: Response) => {
    try {
        const { productId, quantity } = req.body;

        const item = await addCartItemService(
            Number(req.params.id),
            Number(productId),
            Number(quantity)
        );

        res.status(201).json(item);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al agregar el producto al carrito' });
    }
};

export const updateCartItemController = async (req: Request, res: Response) => {
    try {
        const { quantity } = req.body;

        const item = await updateCartItemService(
            Number(req.params.id),
            Number(req.params.productId),
            Number(quantity)
        );

        if (!item) {
            return res.status(404).json({ mensaje: 'Producto no encontrado en el carrito' });
        }

        res.json(item);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al actualizar el producto del carrito' });
    }
};

export const deleteCartItemController = async (req: Request, res: Response) => {
    try {
        const item = await deleteCartItemService(
            Number(req.params.id),
            Number(req.params.productId)
        );

        if (!item) {
            return res.status(404).json({ mensaje: 'Producto no encontrado en el carrito' });
        }

        res.json({ mensaje: 'Producto eliminado del carrito' });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al eliminar el producto del carrito' });
    }
};