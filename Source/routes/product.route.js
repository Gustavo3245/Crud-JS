
const express = require("express");
const router = express.Router();
const {getProducts, getProduct, postProduct, UpdateById, DeletedById, SelectByPriceOrder} = require('../Controllers/product.controller.js');

// Get Routes
router.get('/products', getProducts);
router.get('/product/:id', getProduct);
router.get('/products/price', SelectByPriceOrder);


//Post Routes
router.post('/', postProduct);

//Put Routes
router.put('/:id', UpdateById);

//Deleted Routes
router.delete('/:id', DeletedById);


module.exports = router;