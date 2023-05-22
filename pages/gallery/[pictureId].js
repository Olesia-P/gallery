import { useRouter } from "next/router";
import { useContext } from "react";
import { PictureContext } from "../_app";

export default function Picture({}) {
  const router = useRouter();
  const pictureId = parseInt(router.query.pictureId, 10);
  const { pictures } = useContext(PictureContext);

  const renderObject = pictures.find((element) => element.id === pictureId);

  return (
    <div>
      {renderObject !== undefined && (
        <div>
          <h1>{renderObject.description}</h1>
          <img src={renderObject.img} />
        </div>
      )}
    </div>
  );
}
