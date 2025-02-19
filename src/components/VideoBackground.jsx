import React from "react"
import logo from '../assets/pic1.jpg'
const VideoBackground = ({e}) => {
    
  return (
    <div className='VideoBackground'>
        <img src= {e} alt="" loading="lazy" />
    </div>
  )
}

export default VideoBackground