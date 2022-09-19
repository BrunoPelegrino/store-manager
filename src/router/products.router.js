const express = require('express');
const { createProductController } = require('../controllers');

const router = express.Router();

const productsController = require('../controllers/products.controller');

router.get('/', productsController.products);

router.get('/:id', productsController.productsById);
router.post('/', createProductController.newProduct);

module.exports = router;