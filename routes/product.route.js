import express from "express";
import {getProducts,getProduct,createProduct,updateProduct,deleteProduct} from "../controllers/product.controller.js";

const router = express.Router();//Important thing

//displays all the products
router.get("/", getProducts);

//display specific product
router.get("/:id", getProduct);

//Create new product
router.post("/", createProduct);

//update a product
router.put("/:id" , updateProduct);

//Delete Product
router.delete("/:id",deleteProduct);

export {router};