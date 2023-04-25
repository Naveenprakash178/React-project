import React from 'react'
import vi from '../assets/vi.mp4'
export default function Header() {
  return (
    <div id='cont'>
      <nav>
      {/* <img src={img1} id='logo'></img> */}
       <video autoPlay muted loop id="video" style={{height:'15vh'}}>
        // <source src={vi} type="video/mp4" /> 
        </video>
      <ul id='list'>
            <li>
              <a href='/'>Home</a>
              </li>
            {/* <li><a href='#hmm'>Skills</a></li> */}
            <li><a href='#soc'>About</a></li>
            <li><a href='#soc'>Contacts</a></li>
            {/* <li><a href='#'>Contacts</a></li> */}
        </ul>
      
      {/* <MenuIcon style={{color:'#ff4545'}} id='menu'/> */}
      </nav>
    </div>
  )
}
