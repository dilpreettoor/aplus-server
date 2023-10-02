/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
    await knex('products').del();
    await knex('products').insert([
      {
        productID: '11111111-1111-1111-1111-111111111111',
        productName: 'Milk 3% 4L',
        description: 'Fresh milk carton',
        price: 7.99,
        category: 'Dairy',
        qty: 50,
        imageURL: '/images/milk.jpg',
      },
      {
        productID: '22222222-2222-2222-2222-222222222222',
        productName: 'Banana',
        description: 'BANANANANANNANANA',
        price: 0.85,
        category: 'Fruit',
        qty: 30,
        imageURL: '/images/banana.jpg',
      },
      {
        productID: '33333333-3333-3333-3333-333333333333',
        productName: 'Coke Classic - 355ml',
        description: 'A can of authentic cola',
        price: 1.69,
        category: 'Beverage',
        qty: 40,
        imageURL: '/images/coke.jpg',
      },
      {
        productID: '44444444-4444-4444-4444-444444444444',
        productName: 'Prime Ice pop - 355ml',
        description: 'Sugar Free Energy Drink',
        price: 5.99,
        category: 'Beverage',
        qty: 100,
        imageURL: '/images/prime.jpg',
      },
      {
        productID: '44444444-4444-4444-4444-444444444443',
        productName: 'Takis Blue Heat - 113G',
        description: 'Rare Blue heat Taki',
        price: 5.99,
        category: 'Chips',
        qty: 100,
        imageURL: '/images/taki.jpg',
      }
    ]);
  };
  