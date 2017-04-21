var express = require("express");
var friendRoute = express.Router();
var Friend = require("../models/friend-schema");

friendRoute

.get("/", function (req, res) {
    Friend.find(req.query, function (err, friendsArray) {
        res.send(friendsArray);
    })
})

.post("/", function (req, res) {
    newFriend = new Friend(req.body);
    newFriend.save(function (err, savedFriend) {
        res.send(savedFriend);
    });
})

.delete("/:id", function(req, res){
    Friend.findByIdAndRemove(req.params.id, function(err, deletedFriend){
       res.send(deletedFriend)
    })
})

.put("/:id", function(req, res){
    Friend.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, editedFriend){
        res.send(editedFriend); 
    })
})

module.exports = friendRoute;