const { saleService } = require('../services');

const newSale = async (req, res) => {
  const { productId, quantity } = req.body;
  const { type, message } = await saleService.createSale(productId, quantity);
 if (type) return res.status(type).json({ message });

  res.status(201).json(message);
};

module.exports = {
  newSale,
};