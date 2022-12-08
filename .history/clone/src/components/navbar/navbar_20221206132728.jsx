import React,{useState} from 'react'
import {RiCloseLine, RiMenu2Line } from 'react-icons/ri';
import Modal from './Modal';
// import { useContext } from 'react';


import './navbar.css'



const Navbar= () => {
    // const { toggleMenu, handleClose, handleOpen } = useContext();
    const [toggleMenu,setToggleMenu]=useState(false);
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

                {toggleMenu
                  ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
                  : <RiMenuLine color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
                {toggleMenu && (
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


                
                {/*{toggleMenu ? (
                    <RiCloseLine color="black" size={27} onClick={handleClose} />
                  ) : (
                    <RiMenu2Line
                      size={27}
                      onClick={handleOpen}
                    />
                  )}
                </div>
          
                {toggleMenu && <Modal handleClose={handleClose} />}*/}
    
    </div>
    </div>


      
    
  )
}

export default Navbar
