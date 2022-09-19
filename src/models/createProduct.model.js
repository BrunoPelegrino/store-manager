const connection = require('./connection');

const insert = async (product) => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO StoreManager.products (name) VALUE (?)', [product.name],
  ); return insertId;
};

module.exports = {
  insert,
};