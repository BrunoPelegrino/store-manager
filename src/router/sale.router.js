const express = require('express');
const { saleController } = require('../controllers');
const { validateId, validateQauntity } = require('../middlewares/validateSale');

const router = express.Router();

router.post('/', validateQauntity, validateId, saleController.newSale);

module.exports = router;