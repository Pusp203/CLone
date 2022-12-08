import React, { useState } from "react";
import { RiCloseLine, RiMenu2Line } from "react-icons/ri";
import Modal from "./Modal";
// import { useContext } from 'react';
// import useToggle from "./useToggle";

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
        <div className="nav-right">
          <div class="navbar-item">
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

            <button className="bookCallBtn">Book a call</button>
          </div>

          <button className="hamburger-menu">
            <RiMenu2Line
              color="#111"
              size={27}
              onClick={() => setToggleMenu(true)}
            />
           
          </button>
         
        </div>
      </div>

      {/*
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
        */}

      {toggleMenu && (
        <ul class="navbar-item1">

        <div className="hamburger-style">
          <img src="https://boostylabs.com/img/logo-black.png" />
        

        <RiCloseLine
        className="ri-close"
        color="#111"
        size={27}
        onClick={() => setToggleMenu(false)}
      />

      
      
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
            target="_blank"
            color="black"
          >
            <button className="bd-1">Book a call</button>
          </a>
       
        </ul>
      )}
    </div>
  );
};

export default Navbar;
