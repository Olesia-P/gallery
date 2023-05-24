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

  const nextPixture = (renderObject) => {
    const renderObjectIndex = pictures.indexOf(renderObject);
    const nextObjectIndex = renderObjectIndex + 1;
    const lastIndex = pictures.length - 1;
    const nextPictureId =
      nextObjectIndex <= lastIndex ? pictures[nextObjectIndex].id : 0;
    if (nextObjectIndex <= lastIndex) {
      return nextPictureId;
    }
    if (nextObjectIndex > lastIndex || nextPictureId === 0) {
      return pictures[0].id;
    }
  };

  return (
    <div>
      <Link href={`/gallery/${nextPixture(renderObject)}`}>
        <a className={css.link}>Next picture</a>
      </Link>

      {renderObject !== undefined && (
        <div>
          <h1>{renderObject.description}</h1>
          <img src={renderObject.img} />
        </div>
      )}
    </div>
  );
}
