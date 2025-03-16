const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema({
  title : {
    type :String,
    require:true
  },
  link:{
    type: String,
    require :true
  },
  description : {
    type : String
  }
})

const video = mongoose.model("video" , videoSchema);

module.exports = video;