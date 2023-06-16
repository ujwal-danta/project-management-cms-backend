const express = require('express')
const router = express.Router()




// const upload = require('../utils/multer')

// const { postProject, getAllProjects, getSingleProject, updateSingleProject, deleteSingleProject } = require('../controllers/project')
const {postCategory}  = require('../controllers/category')

// router.get('/', getAllProjects)
// router.post('/', upload.single('image'), postProject)
// router.get('/:id', getSingleProject)
// router.patch('/:id',upload.single('image'),updateSingleProject)
// router.delete('/:id',deleteSingleProject)


router.post('/addCategory',postCategory)





module.exports = router    