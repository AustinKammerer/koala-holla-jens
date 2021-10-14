const express = require('express');
const koalaRouter = express.Router();

// DB CONNECTION


// GET


// POST
koalaRouter.post('/', (req, res) => {
    const newKoala = req.body;
    let queryText = `
    INSERT INTO "koalas" ("name", "gender", "age", "transfer_ready", "notes")
    VALUES ( $1, $2, $3, $4, $5);
    `;

    pool.query(queryText, [newKoala.name, newKoala.gender, newKoala.age, newKoala.transfer_ready, newKoala.notes])
    .then( (result) => {
        console.log('result is', result);
        res.sendStatus(201);
        
    }).catch( (err) => {
        console.log('Error making POST to DB');
        res.sendStatus(500);
    })

})

// PUT


// DELETE

module.exports = koalaRouter;