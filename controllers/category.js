

const Category = require('../models/category')


const getAllCategories = async (req,res,next)=>{
    try {
        const data = await Category.find()
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json(error)
    }
}

const postCategory = async (req,res,next) => {
    try {
        console.log(req.body)
        const category = new Category(req.body)
        const data = await category.save()
        res.status(200).json(data)
    } catch (error) {
        const { name } = error
        res.status(500).json({
            error: {
                message: name
            }
        })
    }
}





module.exports = { postCategory,getAllCategories}