var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/friends", function () {
    console.log("I am connected to mongodb");
});

//---------------------------------------
var express = require("express");
var app = express();
//---------------------------------------

//---------------------------------------
var bodyParser = require("body-parser");
app.use(bodyParser.json());
//---------------------------------------



app.use("/friends", require("./routes/friend-route"))

var port = 8000;
app.listen(port, function () {
    console.log("App is listening on port " + port);
})
