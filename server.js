var express = require('express'),
   path = require('path'),
   compression = require('compression');

var app = express();

app.use(express.static(path.join('./src')));

app.get('*', function(req, res) {
 res.sendFile(__dirname + "/src/index.html");
})

app.listen(8080);
console.log("Listening on PORT "+ 8080);
