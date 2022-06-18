import { Router } from "express";
import { createProduct, deleteProduct, listProduct, listProductDetail, updateProduct } from "../controllers/products";
import { checkAuth, isAdmin, isAuth, requiredSigin } from "../middleware/checkAuth";
import { userById } from "../controllers/user";
const ProductRoute = Router();




ProductRoute.get('/products',checkAuth,listProduct);

ProductRoute.get('/products/:id',checkAuth,listProductDetail);

ProductRoute.post('/products', createProduct); 
// :userId',requiredSigin, isAuth, isAdmin,createProduct

ProductRoute.delete('/products/:id',checkAuth, deleteProduct);

ProductRoute.put('/products/:id',checkAuth, updateProduct);

ProductRoute.param('userId', userById);

export default ProductRoute