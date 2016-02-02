var http = require('http');

var goodPORT = 7000;
var badPORT = 7500;


//Server 7000
var handleRequest = function (req, res) {
  res.end("It worked! You're an awesome individual " + req.url);
}

var goodServer = http.createServer(handleRequest);

goodServer.listen(goodPORT, function() {
  console.log("Server is listening at http://localhost:%s", goodPORT);
});


// Server 7500
var handleRequest = function (req, res) {
  res.end("It worked, yet you're a terrible human being: " + req.url);
}

var badServer = http.createServer(handleRequest);

badServer.listen(badPORT, function() {
  console.log("Server is listening at http://localhost:%s", badPORT);
});