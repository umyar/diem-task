import React from "react";
import PageHeader from './PageHeader/PageHeader';
import MainMenu from './MainMenu/MainMenu';
import MainContent from './MainContent/MainContent';

import "./app.css";
import "./mui-custom.css"

function App() {
  return (
    <>
      <PageHeader />
      <MainMenu />
      <MainContent />
    </>
  );
}

export default App;
