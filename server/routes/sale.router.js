const pool = require('../modules/pool.js');
let express = require('express');
let router = express.Router();

// //GET sale
router.get('/', (req, res) => {
  let queryText = 'SELECT * FROM hadar;';
  pool.query(queryText)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log('Error making query in router.get', error);
      res.send(500);
    });
});

//POST sale
router.post('/', (req, res) => {
  const queryText = 'INSERT INTO hadar (city, sqft, cost, type) VALUES ($1, $2, $3, $4)';
  pool.query(queryText, [req.body.city, req.body.sqft, req.body.cost, req.body.type])
    .then((result) => {
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log('Error making insert query', err);
      res.sendStatus(500);
    });
});

module.exports = router;