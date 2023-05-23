import { useRouter } from "next/router";
import { useContext } from "react";
import { PictureContext } from "../_app";
import Link from "next/link";
import css from "../../components/Navbar/Navbar.module.scss";

export default function Picture({}) {
  const router = useRouter();
  const pictureId = parseInt(router.query.pictureId, 10);
  const { pictures } = useContext(PictureContext);

  const renderObject = pictures.find((element) => element.id === pictureId);
  const nextPictureId = pictureId + 1;

  return (
    <div>
      {nextPictureId <= pictures.length && (
        <Link href={`/gallery/${nextPictureId}`}>
          <a className={css.link}>Next picture</a>
        </Link>
      )}
      {(nextPictureId > pictures.length || nextPictureId === 0) && (
        <Link href={`/gallery/1`}>
          <a className={css.link}>Next picture</a>
        </Link>
      )}

      {renderObject !== undefined && (
        <div>
          <h1>{renderObject.description}</h1>
          <img src={renderObject.img} />
        </div>
      )}
    </div>
  );
}
