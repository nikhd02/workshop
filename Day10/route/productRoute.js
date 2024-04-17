const express = require('express');
const productsControllers = require('../controllers_/productsControllers.js');
const productRouter = express.Router();

productRouter.route('/')
    .get(productsControllers.getAllProducts)
    .post(productsControllers.addProduct)

    productRouter.route('/:id')
        .put(productsControllers.updateProduct)
        //.delete(productsControllers.deleteProduct)
module.exports = productRouter;
