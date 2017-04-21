var express = require("express");
var friendRouter = express.Router();

var Friend = require("../friend-schema");

friendRouter.get("/", function (req, res) {
    console.log(req.query)
    Friend.find(req.query, function (err, friendArray) {
        res.send(friendArray);
    })
})

friendRouter.post("/", function (req, res) {
    newFriend = new Friend(req.body);
    console.log(newFriend)
    newFriend.save(function (err, savedFriend) {
        res.send(savedFriend);
    })
})


friendRouter.delete("/:id", function (req, res) {
    Friend.findByIdAndRemove(req.params.id, function (err, deletedFriend) {
        res.send(deletedFriend);
    })
})


friendRouter.put("/:id", function (req, res) {
            Friend.findByIdAndUpdate(req.params.id, req.body, {
                new: true
            }, function (err, editedFriend) {
                editedFriend = req.body;
                res.send(editedFriend);
            })
})


module.exports = friendRouter;