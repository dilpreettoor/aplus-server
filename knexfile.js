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
    connection: process.env.DATABASE_URL || 'postgres://wtvpxgdxkmjedx:f594bcd4f747ed5654ccfd3d79a3e8f19d533d7629935a3cbd56b8a56b6d8afe@ec2-3-210-173-88.compute-1.amazonaws.com:5432/d5psk09ipk97h1', 
    migrations: {
      directory: './migrations',
    },
    seeds: {
      directory: './seeds',
    },
  },
};