// const snakeize = require('snakeize');
const connection = require('./connection');

const insertSale = async () => {
  // https://www.codegrepper.com/code-examples/sql/mysql+insert+date+now
  const [{ insertId }] = await connection.execute(
    'INSERT INTO StoreManager.sales (date) VALUE(NOW())',
  ); return insertId;
};

const insertSaleProducts = async (sales, newSaleId) => {
  // const saleId = await insertNewSale();

  await Promise.all(sales.map(async (sale) => {
    await connection.execute(
      'INSERT INTO StoreManager.sales_products (sale_id,product_id, quantity) VALUES (?, ?, ?)',
      [newSaleId, sale.productId, sale.quantity],
    );
  }));

  return newSaleId;
};

module.exports = {
  insertSale,
  insertSaleProducts,
};