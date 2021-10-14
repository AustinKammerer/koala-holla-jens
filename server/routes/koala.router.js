const { Router } = require('express');
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
koalaRouter.get(`/`, (req,res) => {
    console.log('got to GET');
    let queryText =`
    SELECT * FROM "koalas" 
    ;`;
    pool.query(queryText)
    .then((result) => {
        res.send(result.rows);
    })
    .catch((err) => {
        console.log('ERROR in GET query', err);
        res.sendStatus(500);
    });  
});


// POST


// PUT


// DELETE

module.exports = koalaRouter;