import React from "react";
import DrawerMainMenu from "./MainMenu/DrawerMainMenu";
import PageHeader from "./PageHeader/PageHeader";
import MainMenu from "./MainMenu/MainMenu";
import MainContent from "./MainContent/MainContent";

import "./app.css";
import "./mui-custom.css";

function App() {
  const [state, setState] = React.useState({
    isMenuOpened: false
  });

  const handleMenu = event => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState(({ isMenuOpened }) => ({ isMenuOpened: !isMenuOpened }));
  };

  return (
    <>
      <PageHeader handleMenu={handleMenu} />
      <MainMenu className="desktop" />
      <DrawerMainMenu
        isMenuOpened={state.isMenuOpened}
        handleMenu={handleMenu}
      />
      <MainContent />
    </>
  );
}

export default App;
