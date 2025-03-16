const mongoose  = require("mongoose");
const video = require("../model/video.model");

//  add video


const addVideo = async(req,res) => {
  try {
    const {title,link,description} = req.body;


    if(!title || !link) {
      return res.status(400).json({
        message : "Please fill all details proporly"
      })


    }

    const newVideo = await video.create({
      title,
      link,
      description
    });

     return res.status(200).json({
      message : "Video created successfully"
     })
      

  } catch (error) {
    console.log(error);

  }
}


//  get

const getVideoDettails = async(req,res) => {
  try {

    
    const videoDetails = await video.find();
    // JSON.stringify(videoDetails);

    res.status(200).json({
      message : "get All videos",
      videoDetails
    })
    





  } catch(error) {
    console.log(error);
    res.status(400).json({
      message : "Inernal error fetch datas"
    })
  }
}

module.exports =  {
  addVideo,
  getVideoDettails
}