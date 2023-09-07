/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
    // Delete existing data
    await knex('order_details').del();
    await knex('orders').del();
  
    // Insert data into the "orders" table
    await knex('orders').insert([
      {
        orderID: 'a1f1e03b-85e7-4ab1-b8e5-1c42de774cff',
        userID: '123e4567-e89b-12d3-a456-426655440000',
        orderDate: '2023-09-02',
        orderStatus: 'Processing',
        pickupTime: '2023-09-02 14:00:00',
        totalAmt: 100.00,
      },
      {
        orderID: 'e8eab23d-1755-42f3-96a7-5aee23b4a635',
        userID: '987e6543-21d0-45a6-8234-789654321000',
        orderDate: '2023-09-02',
        orderStatus: 'Completed',
        pickupTime: '2023-09-02 15:30:00',
        totalAmt: 150.50,
      },
    ]);
  
    // Insert data into the "order_details" table
    await knex('order_details').insert([
      {
        orderDetailsID: '8c83d3e5-4521-4b06-8c99-89e242fa1e0d',
        orderID: 'a1f1e03b-85e7-4ab1-b8e5-1c42de774cff',
        productID: '11111111-1111-1111-1111-111111111111',
        qty: 2,
        subtotal: 30.00,
        totalAmt: 100.00,
      },
      {
        orderDetailsID: 'd2aa830b-6149-4b45-b79a-0e51123a9a4d',
        orderID: 'a1f1e03b-85e7-4ab1-b8e5-1c42de774cff',
        productID: '22222222-2222-2222-2222-222222222222',
        qty: 1,
        subtotal: 70.00,
        totalAmt: 100.00,
      },
      {
        orderDetailsID: '8a9a5c48-5d15-4e10-9f5e-55fc3c7e3c24',
        orderID: 'e8eab23d-1755-42f3-96a7-5aee23b4a635',
        productID: '33333333-3333-3333-3333-333333333333',
        qty: 3,
        subtotal: 50.00,
        totalAmt: 150.50,
      },
    ]);
  };
  