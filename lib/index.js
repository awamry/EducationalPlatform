const express = require('express')
const app = express()
<<<<<<< HEAD
const PORT = process.env.PORT || 3000
||||||| merged common ancestors
const PORT = process.env.PORT || 3000;
=======
const PORT = 3000
>>>>>>> 1ce331052e18aea7408e37b55cc0b8a047e6b318
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
