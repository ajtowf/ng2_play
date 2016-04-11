var express = require('express');
var jwt = require('express-jwt');
var cors = require('cors');
var quotes = require('./quotes.json');
var auth0Settings = require('./auth0.json');
var app = express();
app.use(cors());

var jwtCheck = jwt({
  secret: new Buffer(auth0Settings.secret, 'base64'),
  audience: auth0Settings.audience
});

app.use('/api/quote', jwtCheck);

app.get('/api/quote', function (req, res) {
  var rand = Math.floor(Math.random() * quotes.length);
  res.json(quotes[rand]);
});

app.listen(3002, function () {
  console.log('Backend listening on port 3002!');
});