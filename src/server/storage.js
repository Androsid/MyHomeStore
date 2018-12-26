var express = require('express');
var multer = require('multer');
var path = require('path');
var app = express();
var port = 3000;

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

/* //Work with goods from db.json
var fs = require("fs");
app.get('/simDb', function (req, res) {
    let result = JSON.parse(fs.readFileSync("db.json"));
    console.log(result.events);
    res.send(result.events);
});
app.post("/simDb", function (req, res) {
    let newGood = {  
        "id": 12,
        "name": "QQQQCoat Blue",
        "price": 610,
        "categoryId": 1,
        "Qty": 120 
    };
    let data = JSON.stringify(newGood);  
    fs.writeFileSync('db.json', data);  //переписывает весь файл json!!!
    res.send(req.files);
});
 */

var server = app.listen(port, function () {
    console.log("Listening on port %s...", port);
});