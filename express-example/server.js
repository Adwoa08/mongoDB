var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var friendRoute = require("./routes/friend-route")
var mongoose = require('mongoose');

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/feb-class', function(err) {
    if (err) throw err;
    console.log("Connected to DB");
}); 

app.use("/friends", friendRoute)


app.listen(8000, function(){
    console.log("servers up at 8000");
});