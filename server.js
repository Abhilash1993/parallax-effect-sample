var express = require('express'),
   path = require('path'),
   compression = require('compression');

var app = express();

app.use(express.static(path.join('./src')));

app.get('*', function(req, res) {
 res.sendFile(__dirname + "/src/index.html");
})

app.listen(process.env.PORT || 8080);
console.log("Listening on PORT "+ (process.env.PORT || 8080));
