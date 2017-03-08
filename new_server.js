'use strict';

var express = require('express');
var app = express();
var path = require('path');

app.use(express.static('build'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(process.env.PORT || 3000, function () {
  console.log('running at port: ' + process.env.PORT || '3000');
});
