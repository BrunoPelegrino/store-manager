const { productsService } = require('../services');
// const errorMap = require('../utils/errorMap');

const products = async (_req, res) => {
  const { type, message } = await productsService.getProducts();
  if (type) return res.status(type).json(message);
  res.status(201).json(message);
};

module.exports = {
  products,
};