/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = function (knex) {
    return knex.schema.createTable('users', (table) => {
      table.uuid('userID').primary();
      table.string('firstName').notNullable();
      table.string('lastName').notNullable();
      table.string('email').unique().notNullable();
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTableIfExists('users');
  };