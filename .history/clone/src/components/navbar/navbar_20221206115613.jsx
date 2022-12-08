import React from 'react'
import {RiCloseLine, RiMenu2Line } from 'react-icons';

import './navbar.css'



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
                <RiCloseLine/>
                <RiMenu2Line/>
                {toggleMenu ? (
                    <RiCloseLine color="black" size={27} onClick={handleClose} />
                  ) : (
                    <RiMenu3Line
                      // color="#fff"
                      size={27}
                      onClick={handleOpen}
                    />
                  )}
                </div>
          
                {toggleMenu && <Modal handleClose={handleClose} />}
    
    </div>


      
    </div>
  )
}

export default Navbar
