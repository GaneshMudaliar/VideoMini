import React from 'react'
import VideoDetails from './VideoDetails';

const Home = () => {
  return (
    <>
    <nav className='w-full p-4 h- auto '>
      <h1 className='text-xl text-blue-900 pb-2 font-bold border-b-4'>MyVideos</h1>
    </nav>

    <VideoDetails />

    </>

  )
}

export default Home;
