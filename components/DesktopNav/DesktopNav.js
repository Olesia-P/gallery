import Link from "next/link";
import css from "./desktopNav.module.scss";

export default function DesktopNav() {
  return (
    <div className={css.desktopNav}>
      <Link href="/">
        <a className={css.link}>Home</a>
      </Link>
      <Link href="/about">
        <a className={css.link}>About</a>
      </Link>
      <Link href={`/gallery`}>
        <a className={css.link}>Gallery</a>
      </Link>
    </div>
  );
}
