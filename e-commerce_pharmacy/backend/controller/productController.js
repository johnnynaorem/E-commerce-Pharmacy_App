import slugify from "slugify";
import productModel from "../models/productModel.js";
import fs from 'fs';

//create Product
export const createProduct = async (req, res) => {
  try {
    const {name, slug, description, price, category, quantity, shipping} = req.fields;
    const {image} = req.files
    //validation----
    switch(true){
      case !name: 
        return res.status(500).send({message: 'Name is required'})
      case !description: 
        return res.status(500).send({message: 'Description is required'})
      case !price: 
        return res.status(500).send({message: 'Price is required'})
      case !category: 
        return res.status(500).send({message: 'Category is required'})
      case !quantity: 
        return res.status(500).send({message: 'Quantity is required'})
      case image && image.size < 10000: 
        return res.status(500).send({message: 'Image is required and should be less then 1MB'})
    }
    const product = new productModel({...req.fields, slug: slugify(name)})
    if(image){
      product.image.data = fs.readFileSync(image.path)
      product.image.contentType = image.type
    }
    await product.save()
    res.status(201).send({
      success: true,
      message: "Product Created Successfully",
      product
    })
  } catch (error) {
    console.log(error)
    res.status(500).send({
      success: false,
      message: "Error in Product",
      error: error.message
    })
  }
}

//updateProduct
export const updateProduct = async (req, res) => {
  try {
    const {name, slug, description, price, category, quantity, shipping} = req.fields;
    const {image} = req.files
    //validation----
    switch(true){
      case !name: 
        return res.status(500).send({message: 'Name is required'})
      case !description: 
        return res.status(500).send({message: 'Description is required'})
      case !price: 
        return res.status(500).send({message: 'Price is required'})
      case !category: 
        return res.status(500).send({message: 'Category is required'})
      case !quantity: 
        return res.status(500).send({message: 'Quantity is required'})
      case image && image.size < 10000: 
        return res.status(500).send({message: 'Image is required and should be less then 1MB'})
    }
    const product = await productModel.findByIdAndUpdate(req.params.id, {
      ...req.fields, slug: slugify(name)}, {new: true}
      )
    if(image){
      product.image.data = fs.readFileSync(image.path)
      product.image.contentType = image.type
    }
    res.status(201).send({
      success: true,
      message: "Product Updated Successfully",
      product
    })
  } catch (error) {
    console.log(error)
    res.status(500).send({
      success: false,
      message: "Error while Updating Product",
      error: error.message
    })
  }
}

//getAllProduct
export const getAllProduct = async (req, res) => {
  try {
    const products = await productModel.find().populate('category').select("-image").limit(12).sort({createdAt: -1})
    res.status(200).send({
      success: true,
      message: "Fetch All the Products",
      totalCount: products.length,
      products
    })
  } catch (error) {
    console.log(error)
    res.status(500).send({
      success: false,
      message: "Error While Fetching All Product",
      error: error.message
    })
  }
}

//getSingleProduct
export const getSingleProduct = async (req, res) => {
  try {
    const {slug} = req.params
    const product = await productModel.findOne({slug}).populate('category').select("-image").limit(12).sort({createdAt: -1})
    if(!product || product.length === 0){
      return res.status(404).send({
        success: false,
        message: "Product Not Found"
      })
    }
    res.status(200).send({
      success: true,
      message: "Fetch the Product",
      product
    })
  } catch (error) {
    console.log(error)
    res.status(500).send({
      success: false,
      message: "Error while Fetching Product",
      error: error.message
    })
  }
}
//getPhoto
export const getPhoto = async (req, res) => {
  try {
    const {pid} = req.params
    const product = await productModel.findById(pid).select('image')
    if(product.image.data){
      res.set('Content-type', product.image.contentType);
      res.status(200).send(product.image.data)
    }
  } catch (error) {
    console.log(error)
    res.status(500).send({
      success: false,
      message: "Error while getting image",
      error: error.message
    })
  }
}

//deleteProduct
export const deleteProduct = async (req, res) => {
  try {
    const {id} = req.params
    const product = await productModel.findByIdAndDelete(id)
    if(!product || product.length === 0){
      return res.status(404).send({
        success: false,
        message: "Product Not Found"
      })
    }
    res.status(200).send({
      success: true,
      message: "Deleted the Product",
      product
    })
  } catch (error) {
    console.log(error)
    res.status(500).send({
      success: false,
      message: "Error while Deleting Product",
      error: error.message
    })
  }
}
