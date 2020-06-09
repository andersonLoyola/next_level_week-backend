// Update with your config settings.
import path from 'path';
module.exports = {

  development: {
    client: "postgresql",
    connection: {
      database: "next_level_week",
      user: "next_level_week",
      password: "Star1234"
    },
    migrations: {
      directory: path.resolve(__dirname, 'src',  'database', 'migrations'),
      extension: 'ts'
    },
    seeds:{
      directory: path.resolve(__dirname, 'src', 'database', 'seeds'),
      extension: 'ts'
    }
  },

  staging: {
    client: "postgresql",
    connection: {
      database: "next_level_week",
      user: "next_level_week",
      password: "Star1234"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  },

  production: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  }

};
