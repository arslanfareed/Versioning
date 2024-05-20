const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello0o World!!!')
})

app.listen(3000)