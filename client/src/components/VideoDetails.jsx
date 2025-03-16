import React, { useEffect, useState } from 'react'

const VideoDetails = () => {

  const [video , setVideo ] = useState();


//  get video detail

   const videoData = async() => {

    try { 

      const response = await fetch("http://localhost:3000/api/video/getVideo");

    const data = await response.json();

    console.log(data.videoDetails);

    setVideo(data.videoDetails);


    } catch (error) {

      console.log(error)

    }
    
   }

   useEffect(() => {
    videoData()
   },[video])

   

  return (
    <div>
    {video.map((video) => (
      <div key={video._id}>
        <h2>{video.title}</h2>
        <p>{video.description}</p>
        <a href={video.link}>Youtube</a>

      </div>


    ))}
  </div>
  )
}

export default VideoDetails
