const express = require('express');
const { createProductController } = require('../controllers');
const productNameValidation = require('../middlewares/validateName');

const router = express.Router();

const productsController = require('../controllers/products.controller');

router.get('/', productsController.products);

router.get('/:id', productsController.productsById);
router.post('/', productNameValidation, createProductController.newProduct);

module.exports = router;