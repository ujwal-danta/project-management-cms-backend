const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator');
const { Schema } = mongoose

const CategorySchema = new Schema({
    title: {
        type: String,
        required: [true, 'Category is required'],
        unique: true,
    }
})

CategorySchema.plugin(uniqueValidator)

const Category = mongoose.model('Category', CategorySchema)
module.exports = Category