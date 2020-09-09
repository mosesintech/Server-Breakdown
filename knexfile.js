module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: 'localhost',
      database: 'Knex',
    },
    migrations: {
      directory: __dirname + '/migrations',
    },
    seeds: {
      directory: __dirname + '/seeds',
    }
  },
};