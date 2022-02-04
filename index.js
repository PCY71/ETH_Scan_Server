const express = require('express');
const app = express();
const port = 8080;

const controllers = require('./controllers/index');

app.get('/', (req, res) => {
    res.send('Welcome to ETH Scan Test Server!');
})

app.get('/tx', controllers.tx);
app.get('/block', controllers.block);
app.get('/accounts', controllers.accounts);

app.listen(port, () => {
    console.log('Listening...');
})