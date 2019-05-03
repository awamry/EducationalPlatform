const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.status(200).send('root path of the project! (Testing redeploy)\n')
})

app.get('/test', function (req, res) {
  res.status(200).send('root path of the project! (Testing redeploy)\n')
})

app.listen(3000, () => console.log('App is running on port 3000'))
