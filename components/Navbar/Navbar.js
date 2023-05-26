import css from "./navbar.module.scss";
import DesktopNav from "../DesktopNav/DesktopNav";
import MobileNav from "../MobileNav/MobileNav";
import { useState } from "react";
import HamburgerIcon from "../HamburgerIcon/HamburgerIcon";

export default function Navbar({}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={css.navbar}>
      <DesktopNav />
      {isOpen && <MobileNav setIsOpen={setIsOpen} />}
      <HamburgerIcon isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
}

// className={css.link}
