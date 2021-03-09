module.exports = {

    development: {
        client: 'sqlite3',
        connection: {
            filename: './data/heros.db3'
        },
        pool: {
            afterCreate: (conn, done) => {
              conn.run('PRAGMA forgein_keys = ON', done)
            }
          },
        useNullAsDefault: true,
        migrations: {
            directory: './data/migrations'
        },
        seeds: {
            directory: './data/seeds'
        },
    }

};