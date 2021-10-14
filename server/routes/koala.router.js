const { application, Router } = require('express');
const express = require('express');
const { Pool } = require('pg');
const koalaRouter = express.Router();

// DB CONNECTION


// GET
koalaRouter.get('/', (req, res) => {
let queryText = `
SELECT * FROM "koalas"
;`;
pool.query(queryText)
.then(result=>({
    res.send(result.rows)
})



// POST


// PUT


// DELETE

module.exports = koalaRouter;