import { Router } from "express";
import { createProduct, deleteProduct, listProduct, listProductDetail, updateProduct } from "../controllers/products";
import { checkAuth } from "../middleware/checkAuth";

const ProductRoute = Router();




ProductRoute.get('/products',checkAuth,listProduct);

ProductRoute.get('/products/:productId',checkAuth,listProductDetail);

ProductRoute.post('/products',checkAuth,createProduct);

ProductRoute.delete('/products/:productId',checkAuth, deleteProduct);

ProductRoute.put('/products/:productId',checkAuth, updateProduct);

export default ProductRoute