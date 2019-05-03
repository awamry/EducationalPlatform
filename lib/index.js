const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const db = require('./database')

var msg

const connectSequelize = async () => {
  try {
    await db.authenticate()
    msg = 'Successfully connected to the database'
    console.log('Successfully connected to the database')
    app.listen(PORT, () => console.log(`Server running on ${PORT}`))
  } catch (e) {
    msg = e.message
    app.listen(PORT, () => console.log(`Server running on ${PORT}`))
  }
}

connectSequelize()

app.get('/', (req, res) => res.status(200).send(msg))

module.exports = app
