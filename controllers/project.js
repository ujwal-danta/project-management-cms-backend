
const Project = require('../models/project')

const getAllProjects = async (req, res, next) => {
    try {
        const data = await Project.find()
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
        console.log(data)
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


module.exports = { postProject, getAllProjects, getSingleProject }