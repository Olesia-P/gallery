import { CgMenuMotion, CgMenu } from "react-icons/cg";
import cx from "classnames";
import css from "../../styles/navigation/hamburgerIcon.module.scss";

export default function HamburgerIcon({ isOpen, setIsOpen }) {
  return (
    <div onClick={() => setIsOpen(!isOpen)}>
      {isOpen === false && (
        <CgMenu className={cx(css.hamburgerIcon)} size="2.5rem" color="black" />
      )}
      {isOpen === true && (
        <CgMenuMotion
          className={cx(css.hamburgerIcon)}
          size="2.5rem"
          color="black"
        />
      )}
    </div>
  );
}
