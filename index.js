const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = 3044;

app.post('/newHire', (req, res) => {
    console.log(req.body);

    // Create envelope
    var options = {
        uri: 'https://' + '/restapi/v2.1/accounts/{accountId}/envelopes',
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
    }
    request(options, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            console.log(result);
        }
    });

    res.sendStatus(200);
});

app.listen(port,() => {
    console.log('Listening on port ' + port + '...');
});