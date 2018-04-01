const pool = require('../modules/pool.js');
let express = require('express');
let router = express.Router();

// //GET rental
router.get('/', (req, res) => {
  let queryText = 'SELECT * FROM listings WHERE type ILIKE \'rent\';';
  pool.query(queryText)
  .then((result) => {
    res.send(result.rows);
  })
  .catch((error) => {
    console.log('Error making query in rent router.get', error);
    res.send(500);
  });
});

//POST
router.post('/', (req, res) => {
  const queryText = 'INSERT INTO listings (city, sqft, cost, type) VALUES ($1, $2, $3, $4);'
  pool.query(queryText, [req.body.city, req.body.sqft, req.body.cost, req.body.type])
    .then((result) => {
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log('Error making post query', err);
      res.sendStatus(500);
    });
});

module.exports = router;