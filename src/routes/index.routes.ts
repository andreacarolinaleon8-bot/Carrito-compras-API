import { Router } from 'express';

import productRoutes from './product.routes';
import cartRoutes from './cart.routes';
import cartItemRoutes from './cartItem.routes';

const router = Router();

router.use('/products', productRoutes);
router.use('/carts', cartRoutes);
router.use('/carts', cartItemRoutes);

export default router;
