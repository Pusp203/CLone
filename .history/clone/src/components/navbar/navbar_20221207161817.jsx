import React, { useState } from "react";
import { RiCloseLine, RiMenu2Line } from "react-icons/ri";
import Modal from "./Modal";
// import { useContext } from 'react';
import useToggle from "../../components/navbar/useToggle";

import "./navbar.css";

const Navbar = () => {
  // const { toggleMenu, handleClose, handleOpen } = useToggle();
  const [toggleMenu, setToggleMenu] = useState(false);
  
  return (
    <div className="navbar">
      <div className="navbar__links">
        <div className="navbar__links-logo">
          <img src="https://boostylabs.com/img/logo-black.png" />
        </div>
        <ul class="navbar-item">
          <li class="item-1">
            <a class="nav-link" href="/services">
              Services
            </a>
          </li>
          <li class="item-1">
            <a class="nav-link" href="/projects">
              Projects
            </a>
          </li>
          <li class="item-1">
            <a class="nav-link" href="/solutions">
              Solutions
            </a>
          </li>
          <li class="item-1">
            <a class="nav-link " href="/growth">
              Growth
            </a>
          </li>
          <li class="item-1">
            <a class="nav-link" href="/contacts">
              Contacts
            </a>
          </li>
          </ul>
          <a
            className="anchor-btn"
            href="https://meetings-eu1.hubspot.com/boosty/book-a-call"
            target="_blank"
          >
            
            <button className="border-1" >Book a call</button>
          </a>
          

        </div>
        
        
{toggleMenu ? (
  <RiCloseLine color="black" size={27} onClick={handleClose} />
) : (
  <RiMenu2Line
    // color="#fff"
    size={27}
    onClick={handleOpen}
  />
)}


{toggleMenu && <Navbar handleClose={handleClose} />}
media screen and (max-width: 560px) {
  .gpt3__navbar-links {
    display: none;
  }

  .gpt3__navbar-menu {
    display: flex;
  }
}

@media screen and (max-width: 700px) {
  .gpt3__navbar {
    padding: 2rem 4rem;
  }
}

@media screen and (max-width: 550px) {
  .gpt3__navbar {
    padding: 2rem;
  }

       
        
      </div>
    
  );
};

export default Navbar;
