/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = function (knex) {
    return knex.schema.createTable('rewards', (table) => {
      table.uuid('rewardID').primary();
      table.uuid('userID').unsigned().references('userID').inTable('users');
      table.integer('rewardTotal');
      table.datetime('lastUpdated');
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTableIfExists('rewards');
  };