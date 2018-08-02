const express = require('express');
const app = express();
const api = require('./routes/api');
const path = require('path');

app.use(express.json());
app.use('/api', api);
app.use(express.static(path.join(__dirname, '/client/static')/*, {extensions: ['html']}*/));
//app.use('/projects/bank-ledger', express.static(path.join(__dirname, '/client/apps/bank-ledger/build')));

app.listen(3000, () => console.log('Listening on port 3000...'));