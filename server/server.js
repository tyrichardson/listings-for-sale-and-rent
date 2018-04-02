//Node HQ; server config,.
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
let port = process.env.PORT || 5000;
const rentRouter = require('./routes/rent.router');
const saleRouter = require('./routes/sale.router');

app.use(bodyParser.json());

app.use('/rent', rentRouter);
app.use('/sale', saleRouter);

app.use(express.static('server/public'));

app.listen(port, () => {
    console.log(`server is running on ${port}`);
});
