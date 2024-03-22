import express from 'express';
import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js';
import { createProduct, deleteProduct, getAllProduct, getPhoto, getSingleProduct, updateProduct } from '../controller/productController.js';
import formidable from 'express-formidable'

const router = express.Router()

//routes
//create Product route
router.post('/create-product', requireSignIn, isAdmin, formidable(), createProduct);

//update Product route
router.put('/update-product/:id', requireSignIn, isAdmin, formidable(), updateProduct);

//get All Product route
router.get('/get-products', getAllProduct);

//get Single Product route
router.get('/get-product/:slug', getSingleProduct);

//get Product image route
router.get('/product-image/:pid', getPhoto);

//delete Product route
router.get('/product-delete/:id', requireSignIn, isAdmin, deleteProduct);

export default router;