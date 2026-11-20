import { Router } from 'express';

import {
    getProducts,
    getProduct,
    createProductController,
    updateProductController,
    deleteProductController
} from '../controllers/product.controller';

const router = Router();

router.get('/', getProducts);
router.get('/:id', getProduct);
router.post('/', createProductController);
router.put('/:id', updateProductController);
router.delete('/:id', deleteProductController);

export default router;