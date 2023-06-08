import Link from "next/link";
import css from "./mobileNav.module.scss";
import cx from "classnames";
import { useContext } from "react";
import { PictureContext } from "../../pages/_app";

export default function MobileNav({ setIsOpen }) {
  const { pictures } = useContext(PictureContext);
  console.log(pictures.map);

  return (
    <div className={css.overlay} onClick={() => setIsOpen(false)}>
      <div className={cx(css.mobileNav)}>
        <Link href="/">
          <a className={css.link}>Home</a>
        </Link>
        <Link href="/about">
          <a className={css.link}>About</a>
        </Link>
        <Link href={`/gallery`}>
          <a className={css.link}>Gallery</a>
        </Link>
        {pictures.map((element, key) => (
          <Link key={element} href={`/gallery/${element.id}`}>
            <a className={css.link}>Picture {element.id}</a>
          </Link>
        ))}
      </div>
    </div>
  );
}
