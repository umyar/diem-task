import Help from "@material-ui/core/SvgIcon/SvgIcon";
import React from "react";
import Button from "@material-ui/core/Button";
import Chip from "@material-ui/core/Chip";

import photo from "../doctor.jpeg";

const ProfileCard = () => {
  return (
    <section className="profile">
      <h2>John John</h2>
      <div className="photo-wrapper">
        <img src={photo} alt="John John" className="photo" width="100%" />
      </div>
      <div className="tags">
        <Chip size="small" label="Best doctor" />
        <Chip size="small" label="Surgeon" />
        <Chip size="small" label="Pathologist" />
      </div>
      <div className="actions">
        <Button variant="contained">Dismiss</Button>
        <Button variant="contained">Send Message</Button>
      </div>
    </section>
  );
};

export default ProfileCard;
