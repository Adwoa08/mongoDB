var mongoose = require('mongoose'); 

var Schema = mongoose.Schema;

var friendSchema = new Schema({  
  name: String,
  age: Number,
  interests: [String],
  friends: [String],
  isDeveloper: Boolean
});

var Friend = mongoose.model('Friend', friendSchema); 

module.exports = Friend;