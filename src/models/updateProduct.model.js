const connection = require('./connection');

const updateProduct = async (id, name) => {
  const [{ affectedRows }] = await connection.execute(
    'UPDATE StoreManager.products SET name = ? WHERE id = ?', [name, id],
  ); return affectedRows;
};

module.exports = {
  updateProduct,
};