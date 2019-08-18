import React from "react";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  avatar: {
    margin: 10
  }
});

const AuthBlock = () => {
  const classes = useStyles();
  return (
    <div>
      <Avatar className={classes.avatar}>John</Avatar>
    </div>
  );
};

export default AuthBlock;
