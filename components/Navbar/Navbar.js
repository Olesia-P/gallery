import Link from "next/link";
import css from "/styles/Home.module.scss";

export default function Navbar({ postId = 365 }) {
  return (
    <nav className={css.nav}>
      <Link href="/" className={css.link}>
        <a>Home</a>
      </Link>
      <Link href="/about" className={css.link}>
        <a>About</a>
      </Link>
      <Link href="/activity" className={css.link}>
        <a>Activity</a>
      </Link>
      <Link href={`/activity/${postId}`} className={css.link}>
        <a>Posts</a>
      </Link>
    </nav>
  );
}

// className={css.link}
