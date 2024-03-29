
const Project = require('../models/project')

const getAllProjects = async (req, res, next) => {
    try {
        const data = await Project.find().sort({createdAt : -1})
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json(error)
    }
}

const postProject = async (req, res, next) => {
    try {
        const newBody = {
            image: req.file.path,
            ...req.body
        }
        const project = new Project(newBody)
        const data = await project.save()
        // console.log(data)
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

const getSingleProject = async (req, res) => {
    try {
        const { id } = req.params
        const data = await Project.findById(id).exec();
        if (data == null) {
            return res.status(404).json({
                error: {
                    message: 'Item Not Found'
                }
            })
        }
        res.status(200).json(data)
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
}

const updateSingleProject = async (req, res) => {
    try {
        const img = req.file ? req.file.path : req.body.image
        const newBody = {
            image: img,
            ...req.body
        }
        // console.log('patch req called')
        const id = req.params.id
        // console.log(id)
        // console.log(req.body)
        // console.log(req.file)
        const updatedData = await Project.findByIdAndUpdate(id, newBody, {
            new: true
        })
        // console.log("updated data - ", updatedData)
        return res.status(200).json(updatedData)
    } catch (error) {
        console.log(error)
        const { name } = error
        res.status(500).json({
            error: {
                message: name
            }
        })
    }
}

const deleteSingleProject = async(req,res) => {
    try {
    const id = req.params.id
    const res = await Project.findByIdAndDelete(id)
    return res.status(200).json(res)
    } catch (error) {
        const { name } = error
        res.status(500).json({
            error: {
                message: name
            }
        })
    }
}

module.exports = { postProject, getAllProjects, getSingleProject, updateSingleProject, deleteSingleProject }