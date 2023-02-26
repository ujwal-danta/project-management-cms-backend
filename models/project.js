const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator');
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

projectSchema.plugin(uniqueValidator)

const Project = mongoose.model('Project', projectSchema)
module.exports = Project