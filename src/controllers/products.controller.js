const { productsService } = require('../services');
// const errorMap = require('../utils/errorMap');

const products = async (_req, res) => {
  const { type, message } = await productsService.getProducts();
  if (type) return res.status(type).json({ message });
  res.status(200).json(message);
};

const productsById = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await productsService.getProductsById(id);

  if (type) return res.status(type).json({ message });

  res.status(200).json(message);
};

module.exports = {
  products,
  productsById,
};