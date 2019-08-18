import React from "react";
import Notifications from "@material-ui/icons/Notifications";
import IconButton from "@material-ui/core/IconButton";

const AlertsLink = () => {
  return (
    <IconButton className="header-notification" aria-label="notifications">
      <Notifications />
    </IconButton>
  );
};

export default AlertsLink;
