const express = require('express');
const morgan = require('morgan');
// const session = require('express-session');
// const KnexSessionStore = require('connect-session-knex')(session);

const dbConfig = require('../data/db-config');

const AuthRoutes = require('../auth/authRouter');
const UsersRoutes = require('./Users/userRouter');
const AdoptersRoutes = require('./Adopters/adoptersRoutes');
const DogsRoutes = require('./Dogs/dogsRoutes');

// const sessionConfig = {
//     name: "Lambda cookie",
//     secret: process.env.SESSION_SECRET || 'Boom shaka laka',
//     cookie: {
//         maxAge: 1000 * 60,
//         secure: process.env.USE_SECURE_COOKIES || false,
//         httpOnly: true
//     },
//     resave: false,
//     saveUninitialized: true,
//     store: new KnexSessionStore ({
//         knex: dbConfig,
//         tablename: "sessions",
//         sidfieldname: "sid",
//         createtable: true,
//         clearInterval: 1000 * 60 * 30,
//     })
// }

const server = express();

// server.use(session(sessionConfig));
server.use(express.json());
server.use(morgan('tiny'));

server.use('/auth', AuthRoutes);
server.use('/users', UsersRoutes);
server.use('/adopters', AdoptersRoutes);
server.use('/dogs', DogsRoutes);

module.exports = server;
