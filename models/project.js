const mongoose = require('mongoose')

const { Schema } = mongoose

const projectSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Title is required'],
        unique: true
    },
    image: {
        type: String
    },
    tags: [String],
    githubLink: String,
    siteLink: String,
})

const Project = mongoose.model('Project', projectSchema)
module.exports = Project