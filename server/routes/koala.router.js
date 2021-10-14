const express = require('express');
const koalaRouter = express.Router();

const pg = require(`pg`);

const Pool =pg.Pool;

const pool = new Pool({

    database:`koalas`,
    host: 'localhost',
    port: 5432,
    max: 10,
    idleTimeoutMillis: 30000
});

pool.on(`connect`, () => {
    console.log('postgreSql connected');
});
pool.on(`error`, (error) => {
    console.log('ERROR connecting to postgreSQL', error);
});
// DB CONNECTION


// GET


// POST


// PUT


// DELETE

module.exports = koalaRouter;