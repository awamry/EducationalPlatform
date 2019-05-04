const express = require('express')
<<<<<<< HEAD
const app = express()
const PORT = process.env.PORT || 3000

app.get('/', (req, res) => res.status(200).send('test'))

app.listen(PORT, () => console.log(`Server running on ${PORT}`))
=======
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
>>>>>>> a9af2d784987584ab2b8e878ad4aa2f864f9422e

module.exports = app
