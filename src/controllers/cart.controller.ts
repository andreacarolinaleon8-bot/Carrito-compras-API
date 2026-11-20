import { Request, Response } from 'express';

import {
    createCartService,
    getCartService
} from '../services/cart.service';

export const createCartController = async (req: Request, res: Response) => {
    try {
        const cart = await createCartService();
        res.status(201).json(cart);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al crear el carrito' });
    }
};

export const getCartController = async (req: Request, res: Response) => {
    try {
        const cart = await getCartService(Number(req.params.id));

        if (!cart) {
            return res.status(404).json({ mensaje: 'Carrito no encontrado' });
        }

        res.json(cart);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al consultar el carrito' });
    }
};