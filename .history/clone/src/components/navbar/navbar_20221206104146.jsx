import React from 'react'

const Navbar= () => {
  return (
    <div className='navbar'>
    <div className='navbar__links'>
    <div className='navbar__links-logo'>
    <img src='assets\photos\logo.png'/>
    </div>
    <div className='links__container'>
    <p> <a href='#services'>Services</a> </p>
    <p> <a href='#projects'>Projects</a> </p>
    <p> <a href='#solutions'>Solutions</a> </p>
    <p> <a href='#contacts'>Contacts</a> </p>
    <p> <a href='#growth'>Growth</a> </p>
    </div>
    <a href='' onc> Book a Call</a>
    </div>


      
    </div>
  )
}

export default Navbar
