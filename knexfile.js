require('dotenv').config();

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */

module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: process.env.DB_HOST || 'localhost',
      user: process.env.DB_USER || 'postgres',
      password: process.env.DB_PASSWORD || 'rootroot',
      database: process.env.DB_NAME || 'aplus',
    },
    migrations: {
      directory: './migrations',
    },
    seeds: {
      directory: './seeds',
    },
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL || 'postgres://aplusadmin:hMtsccvbNjhGFvHEvCOnIz0XcTKDjKZP@dpg-cjt9ealhtt0c73b2unsg-a/aplus_dsuj' + "?sslmode=require", 
    migrations: {
      directory: './migrations',
    },
    seeds: {
      directory: './seeds',
    },
  },
};