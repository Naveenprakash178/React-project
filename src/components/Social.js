import React from 'react'
import github from '../assets/images.jpg'
import Insta from '../assets/download.jpg'
import twi from '../assets/pic1.jpg'
import link from '../assets/li.jpg'
import vi from '../assets/vi.mp4'
export default function Social() {
  return (
    <div id='soc' style={{textAlign:'center'}}>
       {/* <video autoPlay muted loop id="video" style={{height:'5vh'}}>
        <source src={vi} type="video/mp4" /> */}
      
      <h4 id='cont'>Contact me from the given social media's</h4>
      
        <a href='https://github.com/Naveenprakash178'>
        <img id='social' src={github}></img></a>
        <a href='https://www.instagram.com/'><img id='social' src={Insta}></img></a>
        {/* <img id='social' src={twi}></img> */}
        <a href='https://www.linkedin.com/feed/'> <img id='social' src={link}></img></a>
        {/* </video> */}
      </div>
        
    // </div>
  )
}