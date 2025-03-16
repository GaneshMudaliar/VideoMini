import React, { useEffect } from 'react'

const VideoDetails = () => {


//  get video details

   const videoData = async() => {

    try { 

      const response = await fetch("http://localhost:3000/api/video/getVideo");
    const data = await response.json();
    console.log(data);


    } catch (error) {

      console.log(error)

    }
    
   }

   

  return (
    <div>H</div>
  )
}

export default VideoDetails