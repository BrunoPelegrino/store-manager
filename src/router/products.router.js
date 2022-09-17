const express = require('express');

const router = express.Router();

const productsController = require('../controllers/products.controller');

router.get('/', productsController.products);

router.get('/:id', productsController.productsById);

module.exports = router;