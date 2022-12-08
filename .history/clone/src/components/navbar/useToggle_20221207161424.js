
import React, { useState } from "react";

const useToggle = () => {
  const [toggleMenu, setToggleMenu] = useState(true);

  const handleClose = () => {
    setToggleMenu(false);
  };

  const handleOpen = () => {
    setToggleMenu(true);
  };

  return { toggleMenu, handleClose, handleOpen };
};

export default useToggle;