import Link from "next/link";
import css from "./mobileNav.module.scss";
import cx from "classnames";

export default function MobileNav({ setIsOpen }) {
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
        <Link href="/gallery/1">
          <a className={css.link}>Picture 1</a>
        </Link>
        <Link href="/gallery/2">
          <a className={css.link}>Picture 2</a>
        </Link>
        <Link href="/gallery/3">
          <a className={css.link}>Picture 3</a>
        </Link>
        <Link href="/gallery/4">
          <a className={css.link}>Picture 4</a>
        </Link>
        <Link href="/gallery/5">
          <a className={css.link}>Picture 5</a>
        </Link>
      </div>
    </div>
  );
}
