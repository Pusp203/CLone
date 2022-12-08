
import React, { createContext, useContext, useState } from "react";
import MiniNavbar from "../components/MiniNavbar";
import Navbar from "./Navbar";


const UserContext = createContext(null);

const Context = () => {
  
  return (
    <UserContext.Provider value={{ toggleMenu, handleClose, handleOpen }}>
      <Navbar />
    </UserContext.Provider>
  );
};

export default Context;

export const userContext = () => {
  return useContext(UserContext);
};
export const handleClose = () => {
  return useContext(handleClose);
};
