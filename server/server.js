const express = require('express')
const mongoose = require('mongoose')

const app = express()
mongoose.set('strictQuery', false)

app.use(express.json())
app.use(express.urlencoded({extended: true}))

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

app.get('/', (req, res) => {
  res.send('hello world')
})

const port = process.env.PORT || 5000

app.listen(port, () => {
  console.log(`listening on port `,port)
})