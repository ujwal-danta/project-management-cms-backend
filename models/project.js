import mongoose from 'mongoose'

const { Schema } = mongoose

const projectSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Title is required'],
        unique: true
    },
    image: {
        type: Buffer
    },
    tags: [Strings],
    githubLink: String,
    siteLink: String,
})