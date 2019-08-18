import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/icons/Menu";

const SideMenuTrigger = ({ handleMenu }) => {
  return (
    <Button onClick={handleMenu} className="menu-trigger">
      <Menu />
    </Button>
  );
};

export default SideMenuTrigger;
