const { saleService } = require('../services');

const newSale = async (req, res) => {
  const sales = req.body;
  const { type, message } = await saleService.insert(sales);
 if (type) return res.status(type).json({ message });

  res.status(201).json(message);
};

module.exports = {
  newSale,
};