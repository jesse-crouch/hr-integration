const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = 3044;

app.post('/newHire', (req, res) => {
    console.log('new hire requested');
    res.sendStatus(200);
});

app.listen(port,() => {
    console.log('Listening on port ' + port + '...');
});