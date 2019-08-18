import React from "react";
import AuthBlock from "./AuthBlock";
import BreadcrumbsLine from "./BreadcrumbsLine";
import SearchPanel from "./SearchPanel";
import AlertsLink from "./AlertsLink";

const PageHeader = () => {
  return (
    <header className="main-header">
      <BreadcrumbsLine />
      <SearchPanel />
      <AlertsLink />
      <AuthBlock />
    </header>
  );
};

export default PageHeader;
