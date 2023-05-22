import Link from "next/link";

export default function Gallery() {
  return (
    <div>
      <Link href="/gallery/1">
        <a>Picture 1</a>
      </Link>
      <Link href="/gallery/2">
        <a>Picture 2</a>
      </Link>
      <Link href="/gallery/3">
        <a>Picture 3</a>
      </Link>
      <Link href="/gallery/4">
        <a>Picture 4</a>
      </Link>
      <Link href="/gallery/5">
        <a>Picture 5</a>
      </Link>
    </div>
  );
}
