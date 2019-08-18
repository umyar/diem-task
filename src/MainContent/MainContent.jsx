import React from "react";
import Contacts from './Contacts';
import ProfileCard from './ProfileCard';
import Summary from './Summary';

const MainContent = () => {
  return (
    <main>
      <ProfileCard />
      <Summary />
      <Contacts />
    </main>
  );
};

export default MainContent;
