const fs = require('fs')
const path = require('path')
const express = require('express')
const formidable = require('formidable')

var app = express()
var port = process.env.PORT || 3000

var uploadDir = path.join(__dirname, 'uploads')
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir)
}
app.use(express.static(uploadDir))
app.post('/', function (req, res) {
    try {
        var form = new formidable.IncomingForm()
        form.parse(req)
        form.on('fileBegin', function (name, file) {
            file.path = path.join(uploadDir, file.name)
        })
        form.on('file', function (name, file) {
            console.log('Uploaded ' + file.name)
            res.end()
        })
    } catch (error) {
        console.error(error)
        res.end()
    }
})

app.listen(port)

