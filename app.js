const express = require('express')
const mongoose = require('mongoose');
const app = express()
require('dotenv').config()
mongoose.set('strictQuery', false);
const port = process.env.PORT
const cors = require('cors')
const bodyParser = require('body-parser')


app.use(cors())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const projects = require('./routes/project')
app.use('/api/projects', projects)



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