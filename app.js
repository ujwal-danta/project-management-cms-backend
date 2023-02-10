const express = require('express')
const mongoose = require('mongoose');
const app = express()
require('dotenv').config()
const port = process.env.PORT
mongoose.set('strictQuery', false);

app.get('/', (req, res) => {
    res.send('<h1>Hello World</h1>')
})

app.listen(process.env.PORT || 4000, () => {
    console.log(`App running on port ${port}`)
})

const start = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log('db connected')
    }
    catch (err) {
        console.log('Unable to connect to DB due to - ', err)
    }
}

start()