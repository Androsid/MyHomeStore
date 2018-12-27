var express = require('express');
var multer = require('multer');
var path = require('path');
var app = express();
var port = 3000;

//use this server only for save images in disk
// le dice a express que el directorio 'uploads', es estatico.
app.use(express.static(path.join(__dirname + '/src/')));

// for CORN
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

var storage = multer.diskStorage({
    // destination of the file
    destination: function (req, file, cb) {
        cb(null, 'uploads');
    },
    // rename file
    filename: function (req, file, cb) {
        //cb(null, file.originalname);
        cb(null, file.fieldname + '-' + Date.now() + '.' + path.extname(file.originalname));
    },
    path: function (req, file, cb) {
        cb(null, 'assets/images/' + file.originalname);
    }
});

var upload = multer({ storage: storage });

//POST file into directory
app.post("/upload", upload.array("uploads", 12), function (req, res) {
    console.log('files', req.files);
    res.send(req.files);
});

var server = app.listen(port, function () {
    console.log("Listening on port %s...", port);
});