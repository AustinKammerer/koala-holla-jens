
const express = require('express');
const router = express.Router();
const pg = require(`pg`);

const Pool = pg.Pool;

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

router.get(`/`, (req,res) => {
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
router.post('/', (req, res) => {
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
router.put('/:id', (req, res)=>{
    let id = req.params.id
    let queryText = (`
    UPDATE "koalas"
    SET "transfer_ready" = TRUE
    WHERE "id" = $1
    `)
    console.log(id)
    let values = [id]
    pool.query(queryText,values).then(result=>{
        res.sendStatus(200)
    }).catch(error=>{
        console.log(error)
        res.sendStatus(500)
    })
});


// DELETE

module.exports = router;