module.exports = {

    development: {
        client: 'sqlite3',
        connection: {
            filename: './dev.sqlite3'
        },
        useNullAsDefault: true,
        migrations: {
            directory: './data/database.db3'
        },
        seeds: {
            directory: './data/database.db3'
        },
    }

};