import React from "react";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import Domain from "@material-ui/icons/Domain";
import LocalHospital from "@material-ui/icons/LocalHospital";
import Accessibility from "@material-ui/icons/Accessibility";
import Help from "@material-ui/icons/Help";

const MainMenu = ({ className }) => {
  return (
    <aside className={className}>
      <h1>Diem Health</h1>
      <nav>
        <ul className="main-menu">
          <li>
            <Link to="#">
              <Button>
                <Accessibility />
                Employees
              </Button>
            </Link>
          </li>
          <li>
            <Link to="#">
              <Button>
                <LocalHospital />
                Hospitals
              </Button>
            </Link>
          </li>
          <li>
            <Link to="#">
              <Button>
                <Domain />
                Documents
              </Button>
            </Link>
          </li>
        </ul>
      </nav>
      <Button variant="contained" className="help">
        <Help />
        Help
      </Button>
    </aside>
  );
};

export default MainMenu;
