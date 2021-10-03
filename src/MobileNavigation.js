import NavLinks from "./NavLinks";
import "./Nav.css";
import Hamburger from "hamburger-react";

import { useState } from "react";
const MobileNavigation = () => {
  const [open, setOpen] = useState(false);
  const closeMobileMenu = () => setOpen(false);
  return (
    <nav className="MobileNavigation">
      {open && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu} />}

      <div className={open ? "MobileNavigation" : "red"} onClick={() => setOpen(!open)}>
        <Hamburger />
      </div>
    </nav>
  );
};
export default MobileNavigation;
