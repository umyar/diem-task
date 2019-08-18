import React from "react";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";

const BreadcrumbsLine = () => {
  return (
    <Breadcrumbs aria-label="breadcrumb" className="breadcrumbs">
      <Link color="inherit" href="#">
        Human Resources
      </Link>
      <Typography color="textPrimary">John John</Typography>
    </Breadcrumbs>
  );
};

export default BreadcrumbsLine;
