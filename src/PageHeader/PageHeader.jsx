import React from "react";
import AuthBlock from "./AuthBlock";
import BreadcrumbsLine from "./BreadcrumbsLine";
import SearchPanel from "./SearchPanel";
import AlertsLink from "./AlertsLink";
import SideMenuTrigger from "./SideMenuTrigger";

const PageHeader = ({ handleMenu }) => {
  return (
    <header className="main-header">
      <SideMenuTrigger handleMenu={handleMenu} />
      <BreadcrumbsLine />
      <SearchPanel />
      <AlertsLink />
      <AuthBlock />
    </header>
  );
};

export default PageHeader;
