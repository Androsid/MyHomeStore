const express = require('express');
const upload = require('./upload');
const cors = require('cors');

const server = express();

var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200
};

server.use(cors(corsOptions));

server.post('/upload', upload);
server.get('/upload', function(req, res){
  //res.send('I am alive!');
  res.end('file catcher example');
});

server.get('/simDb', function(req, res){
  let simDb = [
      
    {
      "id": 1,
      "name": "Coat Blue",
      "price": 60,
      "categoryId": 1,
      "Qty": 10
    },
    {
      "id": 2,
      "name": "Coat red",
      "price": 70,
      "categoryId": 1,
      "Qty": 10
    },
    {
      "id": 3,
      "name": "Coat green",
      "price": 70,
      "categoryId": 1,
      "Qty": 10
    },
    {
      "id": 4,
      "name": "Sled Blue",
      "price": 70,
      "categoryId": 2,
      "Qty": 10
    },
    {
      "id": 5,
      "name": "Sled dirty",
      "price": 7,
      "categoryId": 2,
      "Qty": 10
    },
    {
      "id": 6,
      "name": "Sled red",
      "price": 70,
      "categoryId": 2,
      "Qty": 10
    },
    {
      "id": 7,
      "name": "Hat red",
      "price": 70,
      "categoryId": 4,
      "Qty": 12
    },
    {
      "id": 8,
      "name": "Coat red",
      "price": 70,
      "categoryId": 1,
      "Qty": 23
    },
    {
      "id": 9,
      "name": "Coat new",
      "price": 70,
      "categoryId": 1,
      "Qty": 6
    },
    {
      "id": 10,
      "name": "Coat dirty",
      "price": 10,
      "categoryId": 1,
      "Qty": 3
    },
    {
      "id": 11,
      "name": "Coat second hand",
      "price": 70,
      "categoryId": 1,
      "Qty": 20
    }
]
  res.send(simDb);
});

server.listen(3000, () => {
  console.log('Server started!');
});