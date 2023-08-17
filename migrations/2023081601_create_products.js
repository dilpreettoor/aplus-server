/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = function (knex) {
    return knex.schema.createTable('products', (table) => {
      table.uuid('productID').primary();
      table.string('productName').notNullable();
      table.text('description');
      table.decimal('price', 10, 2).notNullable();
      table.string('category');
      table.integer('qty');
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTableIfExists('products');
  };
  