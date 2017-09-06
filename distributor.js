'use strict';

var express = require('express')
var app = express()
var path = require("path")
var serveIndex = require('serve-index')

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// public directory
app.use('/public', express.static(path.join(__dirname, 'public')))
app.use('/public', serveIndex('public', {'icons': true}))

app.get('/', function (req, res) {
  res.render('index', {
    title: 'Distributor APP',
    });
})

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Distributor app listening at http://%s:%s', host, port);
})