const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.status(200).send('root path of the project! (Testing redeploy)\n');
})

app.listen(8080, function () {
    console.log('App listening at localhost:8080');
})