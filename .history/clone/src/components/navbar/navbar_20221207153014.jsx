import React, { useState } from "react";
import { RiCloseLine, RiMenu2Line } from "react-icons/ri";
import Modal from "./Modal";
// import { useContext } from 'react';

import "./navbar.css";

const Navbar = () => {
  // const { toggleMenu, handleClose, handleOpen } = useContext();
  const [toggleMenu, setToggleMenu] = useState(false);
  const [logo,setLogo]=useState(false);
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
          

        {toggleMenu ? (
          <RiCloseLine
            color="#111"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu2Line
            color="#111"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <ul class="navbar-item1">
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
            <a
              className="anchor-btn"
              href="https://meetings-eu1.hubspot.com/boosty/book-a-call"
              target="_blank" color="black"><button className="bd-1">Book a call</button>
            </a>
          </ul>

          
        )}
       
        
      </div>
    </div>
  );
};

export default Navbar;
