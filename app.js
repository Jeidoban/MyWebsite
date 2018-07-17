const express = require('express');
const app = express();
const api = require('./routes/api');

app.use(express.json());
app.use('/api', api);
app.use(express.static('client/static', {extensions: ['html']}));


app.listen(3000, () => console.log('Listening on port 3000...'));