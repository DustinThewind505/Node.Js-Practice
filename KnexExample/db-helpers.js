const db = require('./db-config');

db('users'); // <======= reutrns an array of ALL users

db('users').where({ id: 4 });

db('users').insert({ name: 'Mike', age: 70 });
