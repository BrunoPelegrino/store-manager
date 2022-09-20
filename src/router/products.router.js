const express = require('express');
const { createProductController, updateProductController } = require('../controllers');
const productNameValidation = require('../middlewares/validateName');

const router = express.Router();

const productsController = require('../controllers/products.controller');

router.get('/', productsController.products);
router.get('/:id', productsController.productsById);
router.post('/', productNameValidation, createProductController.newProduct);
router.put('/:id', productNameValidation, updateProductController.updateById);

module.exports = router;