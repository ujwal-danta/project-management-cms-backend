const express = require('express')
const router = express.Router()




const upload = require('../utils/multer')

const { postProject, getAllProjects, getSingleProject } = require('../controllers/project')


router.get('/', getAllProjects)
router.post('/', upload.single('image'), postProject)
router.get('/:id', getSingleProject)




module.exports = router    