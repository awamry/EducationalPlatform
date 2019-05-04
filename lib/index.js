const express = require('express')
let app = express()
const PORT = process.env.PORT || 3000
const db = require('./database')
var msg

const connectSequelize = async () => {
  db.authenticate()
    .then(() => {
      console.log('Successfully connected')
      app.listen(PORT, () => console.log(`Server running on ${PORT}`))
    })
    .catch(e => console.log(e))
}
connectSequelize()

app.get('/', (req, res) => res.status(200).send(msg))

module.exports = app
