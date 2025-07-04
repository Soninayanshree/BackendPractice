const mongoose = require('mongoose');
//setup connection --- creation of db
mongoose.connect("mongodb://127.0.0.1:27017/practicedb");
//make schema --  document 
const userschema = mongoose.Schema({
  username : String,
  name : String,
  age : Number
});
//make model and export --- collectins
module.exports = mongoose.model("user", userschema);