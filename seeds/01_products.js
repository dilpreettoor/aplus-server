/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
    await knex('products').del();
    await knex('products').insert([
      {
        productID: '2922c286-16cd-4d43-ab98-c79f698aeab0',
        productName: 'Product 1',
        description: 'Description for Product 1',
        price: 99.99,
        category: 'Category 1',
        qty: 10,
        imageURL: '/images/redtshirt.jpg',
      },
      {
        productID: '5bf7bd6c-2b16-4129-bddc-9d37ff8539e9',
        productName: 'Product 2',
        description: 'Description for Product 2',
        price: 49.99,
        category: 'Category 2',
        qty: 20,
        imageURL: '/images/bluetshirt.jpg',
      },
      {
        productID: '90ac3319-70d1-4a51-b91d-ba6c2464408c',
        productName: 'Product 3',
        description: 'Description for Product 3',
        price: 149.99,
        category: 'Category 1',
        qty: 5,
        imageURL: '/images/redtshirt.jpg',
      }
    ]);
  };
  