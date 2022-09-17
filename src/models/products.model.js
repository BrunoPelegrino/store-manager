const connection = require('./connection');

const findAllProducts = async () => {
  const [[result]] = await connection.execute(
    'SELECT * from StoreManager.products',
  ); return result;
};

const findById = async (productId) => {
  const [[result]] = await connection.execute(
    'SELECT * from StoreManager.products WHERE id = ?', [productId],
  ); return result;
};

module.exports = {
  findAllProducts,
  findById,
};