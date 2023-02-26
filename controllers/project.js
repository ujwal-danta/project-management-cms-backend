
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


module.exports = { postProject, getAllProjects }