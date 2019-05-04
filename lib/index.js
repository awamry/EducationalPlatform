const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

app.get('/', (req, res) => res.status(200).send('default'))

app.get('/test', (req, res) => res.status(200).send('test'))

// eslint-disable-next-line no-unused-vars
function test () {
  return 5
}

app.listen(PORT, () => console.log(`Server running on ${PORT}`))

module.exports = app
