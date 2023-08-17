/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = function (knex) {
    return knex.schema.createTable('order_details', (table) => {
      table.uuid('orderDetailsID').primary();
      table.uuid('orderID').unsigned().references('orderID').inTable('orders');
      table.uuid('productID').unsigned().references('productID').inTable('products');
      table.integer('qty');
      table.decimal('subtotal', 10, 2);
      table.decimal('totalAmt', 10, 2);
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTableIfExists('order_details');
  };