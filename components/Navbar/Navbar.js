import Link from "next/link";
import css from "./Navbar.module.scss";

export default function Navbar({ postId = 365 }) {
  return (
    <nav className={css.Navbar}>
      <Link href="/">
        <a className={css.link}>Home</a>
      </Link>
      <Link href="/about">
        <a className={css.link}>About</a>
      </Link>
      <Link href="/activity">
        <a className={css.link}>Activity</a>
      </Link>
      <Link href={`/activity/${postId}`}>
        <a className={css.link}>Posts</a>
      </Link>
    </nav>
  );
}

// className={css.link}
