// initialize express
var express = require('express');
var app = express();

// configure express
app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

// define routes
app.get('/world', function(req, res) {
  res.status(200).send("Hello, World!");
});

// start listener
app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
});
