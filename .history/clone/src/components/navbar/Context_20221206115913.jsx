
import React, { createContext, useContext, useState } from "react";

import 


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
