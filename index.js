const express = require('express')
const dbConnection = require('./config/mongoose')
const app = express()
require('dotenv').config()
const cors = require('cors');

app.use(cors());

const PORT = process.env.PORT || 3000
const routes = require('./routes/recetas');

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/', routes);

dbConnection()

app.listen(PORT, () => {
  console.log(`Express está escuchando en el puerto http://localhost:${PORT}`)
})
