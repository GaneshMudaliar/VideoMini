import React, { useEffect, useState } from 'react'

const VideoDetails = () => {

  const [video , setVideo ] = useState();


//  get video details

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
   },[])

   

  return (
    <div>
    {video.map((videoItem) => (
  <div key={videoItem._id}>
    <h2>{videoItem.title}</h2>
    <p>{videoItem.description}</p>
    <a href={videoItem.link} target="_blank" rel="noopener noreferrer">
      YouTube
    </a>
  </div>
))}

  </div>
  )
}

export default VideoDetails