/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
    await knex('products').del();
    await knex('products').insert([
      {
        productID: '11111111-1111-1111-1111-111111111111',
        productName: 'Product 1',
        description: 'Description for Product 1',
        price: 99.99,
        category: 'Category 1',
        qty: 10,
        imageURL: '/images/redtshirt.jpg',
      },
      {
        productID: '22222222-2222-2222-2222-222222222222',
        productName: 'Product 2',
        description: 'Description for Product 2',
        price: 49.99,
        category: 'Category 2',
        qty: 20,
        imageURL: '/images/bluetshirt.jpg',
      },
      {
        productID: '33333333-3333-3333-3333-333333333333',
        productName: 'Product 3',
        description: 'Description for Product 3',
        price: 149.99,
        category: 'Category 1',
        qty: 5,
        imageURL: '/images/redtshirt.jpg',
      }
    ]);
  };
  