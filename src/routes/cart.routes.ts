import { Router } from 'express';

import {
    createCartController,
    getCartController
} from '../controllers/cart.controller';

const router = Router();

router.post('/', createCartController);
router.get('/:id', getCartController);

export default router;