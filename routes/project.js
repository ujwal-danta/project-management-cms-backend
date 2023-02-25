const express = require('express')
const router = express.Router()

var multer = require('multer');
var path = require('path')

const Project = require('../models/project')
const upload = require('../utils/multer')

// var storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, './public/uploads')
//     },
//     filename: function (req, file, cb) {
//         /*Appending extension with original name*/
//         cb(null, Date.now() + file.originalname)
//     }
// })

// var upload = multer({ storage: storage });

router.post('/', upload.single('image'), (req, res, next) => {

    // const newBody = {
    //     image: req.file.filename,
    //     ...req.body
    // }
    // const project = new Project(newBody)
    // project.save()
    //     .then((data) => {
    //         console.log('project added')
    //         res.send(data)
    //     })
    //     .catch((err) => {
    //         res.send(err)
    //     })
    return res.json({ picture: req.file.path });

});


module.exports = router    