const express = require('express');
const { saleController } = require('../controllers');
const { validateId, validateQauntity } = require('../middlewares/validateSale');

const router = express.Router();

router.post('/', validateId, validateQauntity, saleController.newSale);

module.exports = router;