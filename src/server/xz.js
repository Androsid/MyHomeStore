var express = require('express');
var multer = require('multer');
var path = require('path');
var app = express();
var port = 3000;
var node_db = require('./node_db');

// le dice a express que el directorio 'uploads', es estatico.
app.use(express.static(path.join(__dirname, 'uploads')));

// para CORN
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

var storage = multer.diskStorage({
    // destino del fichero
    destination: function (req, file, cb) {
        cb(null, '../assets/images/')
    },
    // renombrar fichero
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

var upload = multer({ storage: storage });

app.post("/upload", upload.array("uploads[]", 12), function (req, res) {
    console.log('files', req.files);
    res.send(req.files);
});


//Get goods from db.json
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
    fs.writeFileSync('db.json', data);  
    res.send(req.files);
});


var server = app.listen(port, function () {
    console.log("Listening on port %s...", port);
});