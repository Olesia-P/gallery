import Link from "next/link";
import css from "../../styles/gallery.module.scss";

export default function Gallery() {
  return (
    <div className={css.card}>
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
  );
}
