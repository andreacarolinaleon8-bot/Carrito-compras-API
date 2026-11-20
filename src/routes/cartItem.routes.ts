import { Router } from 'express';

import {
    getCartItemsController,
    addCartItemController,
    updateCartItemController,
    deleteCartItemController
} from '../controllers/cartItem.controller';

const router = Router();

router.get('/:id/items', getCartItemsController);
router.post('/:id/items', addCartItemController);
router.put('/:id/items/:productId', updateCartItemController);
router.delete('/:id/items/:productId', deleteCartItemController);

export default router;