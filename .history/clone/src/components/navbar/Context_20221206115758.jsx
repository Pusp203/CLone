
import React, { createContext, useContext, useState } from "react";
import MiniNavbar from "../components/MiniNavbar";
import Navbar from "./Navbar";
import useToggle from "./useToggle";

const UserContext = createContext(null);

const Context = () => {
  const { toggleMenu, handleClose, handleOpen } = useToggle();
  // const [toggleMenu, setToggleMenu] = useState(false);

  // const handleClose = () => {
  //   setToggleMenu(false);
  // };

  // const handleOpen = () => {
  //   setToggleMenu(true);
  // };
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
