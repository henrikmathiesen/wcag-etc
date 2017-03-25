var express = require('express');
var app = express();
var compress = require('compression');

var publicFolder = '/public';
var isProduction = process.env.NODE_ENV === 'production';

if(isProduction) {
  app.use(compress());
}

app.use(express.static(__dirname + publicFolder));

app.get('/', function (req, res) {
  res.sendfile(__dirname + publicFolder + '/index.html');
});

app.listen(1337, function () {
  console.log('Listening on port 1337, production mode is: ' + isProduction);
});
