const snakeize = require('snakeize');
const connection = require('./connection');

const insertSale = async () => {
  // https://www.codegrepper.com/code-examples/sql/mysql+insert+date+now
  const [{ insertId }] = await connection.execute(
    'INSERT INTO StoreManager.sales (date) VALUE(NOW())',
  ); return insertId;
};

const insertSaleProducts = async (sale) => {
    const columns = Object.keys(snakeize(sale))
    .map((key) => `${key}`)
    .join(', ');

  const placeholders = Object.keys(sale)
    .map((_key) => '?')
    .join(', ');
  
  const [{ insertId }] = await connection.execute(
    `INSERT INTO StoreManager.sales_products (${columns}) VALUE (${placeholders})`,
    [...Object.values(sale)],
  ); return insertId;
};

module.exports = {
  insertSale,
  insertSaleProducts,
};