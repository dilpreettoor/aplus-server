/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = function (knex) {
    return knex.schema.createTable('orders', (table) => {
      table.uuid('orderID').primary();
      table.uuid('userID').unsigned().references('userID').inTable('users');
      table.date('orderDate').notNullable();
      table.string('orderStatus');
      table.datetime('pickupTime');
      table.decimal('totalAmt', 10, 2);
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTableIfExists('orders');
  };