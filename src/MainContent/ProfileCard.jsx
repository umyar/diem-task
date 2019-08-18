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
        <Chip className="tag" size="medium" label="Best doctor" />
        <Chip className="tag" size="medium" label="Surgeon" />
        <Chip className="tag" size="medium" label="Pathologist" />
      </div>
      <div className="actions">
        <Button variant="contained">Dismiss</Button>
        <Button variant="contained">Message</Button>
      </div>
    </section>
  );
};

export default ProfileCard;
