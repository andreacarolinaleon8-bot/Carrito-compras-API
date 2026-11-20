import { Request, Response } from 'express';

import {
    getProductsService,
    getProductService,
    createProductService,
    updateProductService,
    deleteProductService
} from '../services/product.service';

export const getProducts = async (req: Request, res: Response) => {
    try {
        const products = await getProductsService();
        res.json(products);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al consultar productos' });
    }
};

export const getProduct = async (req: Request, res: Response) => {
    try {
        const product = await getProductService(Number(req.params.id));

        if (!product) {
            return res.status(404).json({ mensaje: 'Producto no encontrado' });
        }

        res.json(product);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al consultar el producto' });
    }
};

export const createProductController = async (req: Request, res: Response) => {
    try {
        const product = await createProductService(req.body);
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al crear el producto' });
    }
};

export const updateProductController = async (req: Request, res: Response) => {
    try {
        const product = await updateProductService(
            Number(req.params.id),
            req.body
        );

        if (!product) {
            return res.status(404).json({ mensaje: 'Producto no encontrado' });
        }

        res.json(product);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al actualizar el producto' });
    }
};

export const deleteProductController = async (req: Request, res: Response) => {
    try {
        const product = await deleteProductService(Number(req.params.id));

        if (!product) {
            return res.status(404).json({ mensaje: 'Producto no encontrado' });
        }

        res.json({ mensaje: 'Producto eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al eliminar el producto' });
    }
};