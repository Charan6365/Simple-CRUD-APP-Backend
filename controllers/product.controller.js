import {Product} from "../models/product.model.js";

//display all the products
const getProducts = async(req,res) => {
    try{
      const products=await Product.find({});
      res.status(200).json(products);
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
};

//displays single product based on the id
const getProduct = async (req,res)=>{
    const id = req.params.id;
    console.log(id);
    try{
        const products=await Product.findById(id);
        res.status(200).json(products);
      }
      catch(error){
          res.status(500).json({message: error.message});
      }
};

const createProduct = async(req,res)=>{
    try{
       const product = await Product.create(req.body);
       res.status(200).json(product);
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
};

const updateProduct = async (req,res)=>{
    try{
     const id= req.params.id;
     const product=await Product.findByIdAndUpdate(id, req.body);
     
     if(!product){
      res.status(404).json({message: "Product id not found"});
     }
     else{
      const updatedProduct = await Product.findById(id);
      res.status(200).json(updatedProduct);
     }
    }
    catch(error){
      res.status(500).json({message: error.message});
    }
  };

const deleteProduct = async (req,res)=>{
    try{
    const id = req.params.id;
    const product = await Product.findByIdAndDelete(id);
    if(!product){
        res.status(404).json({message: `Product not found.`});
    }
    else{
        res.status(200).json({message:`successfully deleted.`});
    }
    }
    catch(error){
     res.status(500).json({message: error.message});
    }
};


export {getProducts, getProduct, createProduct, updateProduct, deleteProduct};