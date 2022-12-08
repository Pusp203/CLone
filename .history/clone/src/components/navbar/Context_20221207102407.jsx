
import React, { createContext, useContext } from "react";

import Navbar from "./navbar";


const UserContext = createContext(null);

const Context = () => {
  
  return (
    <UserContext.Provider value={{ toggleMenu, handleClose, handleOpen }}>
      <Navbar />
    </UserContext.Provider>
  );
};
// 
export default Context;

export const userContext = () => {
  return useContext(UserContext);
};
export const handleClose = () => {
  return useContext(handleClose);
};
