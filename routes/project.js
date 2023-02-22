const express = require('express')
const router = express.Router()

var multer = require('multer');
var path = require('path')

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/uploads')
    },
    filename: function (req, file, cb) {
        /*Appending extension with original name*/
        cb(null, file.originalname)
    }
})

var upload = multer({ storage: storage });

router.post('/', upload.single('image'), (req, res, next) => {
    console.log(req.body, req.file);
    res.send(req.body)
});


module.exports = router    