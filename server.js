const express = require('express');
const fs = require('fs');
const cors = require('cors');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
app.use(bodyParser.json());


app.use('/', express.static('public'));

app.use(cors());
var budget;
fs.readFile('data.json', 'utf8', (err, file) => {
    budget = file;
    return;
})


app.get('/budget', (req, res) => {
    res.send(budget);
});

app.listen(port, () => {
    console.log(`API served at http://localhost:${port}`);
});