import express from "express";
import { removeProduct, singleProductInfo, listProduct, addProduct } from "../controllers/productController.js";
import upload from "../middleware/multer.js";

const productRouter = express.Router();

productRouter.post('/add', upload.fields([{ name: 'image1', maxCount: 1 }, { name: 'image2', maxCount: 2 }, { name: 'image3', maxCount: 3 }, { name: 'image4', maxCount: 4 }]), addProduct)
productRouter.post('/remove', removeProduct)
productRouter.post('/single', singleProductInfo)
productRouter.get('/list', listProduct)


export default productRouter;