import React from 'react'
import 

const Navbar= () => {
  return (
    <div className='navbar'>
    <div className='navbar__links'>
    <div className='navbar__links-logo'>
    <img src='photos\logo.png'/>
    </div>
    <ul class="navbar-item">
                    <li class="item-1">
                        <a class="nav-link" href="/services">Services</a>
                    </li>
                    <li class="item-1">
                        <a class="nav-link" href="/projects">Projects</a>
                    </li>
                    <li class="item-1">
                        <a class="nav-link" href="/solutions">Solutions</a>
                    </li>
                    <li class="item-1">
                        <a class="nav-link " href="/growth">Growth</a>
                    </li>
                    <li class="item-1">
                        <a class="nav-link" href="/contacts">Contacts</a>
                    </li>
                </ul>
                <a href=''>Book a call</a>
    
    </div>


      
    </div>
  )
}

export default Navbar
