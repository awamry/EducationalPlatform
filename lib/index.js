const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

<<<<<<< HEAD
app.get('/', (req, res) => res.status(200).send('default'))

app.get('/test', (req, res) => res.status(200).send('test'))

function test() {
    return 5;
}


app.listen(PORT, () => console.log(`Server running on ${PORT}`))
=======
app.get('/', (req, res) => res.status(200).send('test'))
app.listen(PORT, () => console.log(`Server running on  ${PORT}`))
>>>>>>> 39f0839a31f72d1fa1476c5f79c53e9a8d800c21


module.exports = app
