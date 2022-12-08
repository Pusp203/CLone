useToggle.js
import React, { useState } from "react";

const useToggle = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleClose = () => {
    setToggleMenu(false);
  };

  const handleOpen = () => {
    setToggleMenu(true);
  };

  return { toggleMenu, handleClose, handleOpen };
};

export default useToggle;