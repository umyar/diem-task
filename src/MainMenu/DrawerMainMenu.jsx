import React from "react";
import MainMenu from "./MainMenu";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";

const DrawerMainMenu = ({ handleMenu, isMenuOpened }) => {
  return (
    <SwipeableDrawer
      open={isMenuOpened}
      // onClose={toggleDrawer('left', false)}
      // onOpen={toggleDrawer('left', true)}
      onClose={handleMenu}
      onOpen={handleMenu}
    >
      <MainMenu className="mobile" />
    </SwipeableDrawer>
  );
};

export default DrawerMainMenu;
