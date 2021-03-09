module.exports = {

    development: {
      client: 'sqlite3',
      connection: {
        filename: './hubs/hubs.db3'
      },
      useNullAsDefault: true,
      migrations: {
        directory: "./hubs/data/migrations"
      },
      seeds: {
        directory: "./hubs/data/seeds"
      }
    }
  
  };