const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.status(200).send('root path of the project! (Testing redeploy)\n');
})

app.get('/test', function (req, res) {
    res.status(200).send('root path of the project! (Testing redeploy)\n');
})

app.listen(8080, function () {})

module.exports = app;