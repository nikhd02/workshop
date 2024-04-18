const express = require('express');
const productController = require('../controllers/productControllers.js');

const productRouter = express.Router();

productRouter.route('/')
    .get(productController.getAllProducts)
    .post(productController.addProduct);

productRouter.route('/:id')
    .put(productController.replaceProduct)
    .delete(productController.deleteProduct)
    .get(productController.getOneProducts)
    .patch(productController.updateProduct);


module.exports = productRouter;