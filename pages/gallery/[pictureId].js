import { useRouter } from "next/router";
import { useContext } from "react";
import { PictureContext } from "../_app";

export default function Picture({}) {
  const router = useRouter();
  const pictureId = router.query.pictureId;
  const { pictures } = useContext(PictureContext);

  const newPictureId = pictureId - 1;

  // console.log("pictures objects ", pictures);
  // console.log("picture Id ", pictureId);
  // console.log("picture +  current page index ", pictures[pictureId]);
  // console.log("picture object with the correct index ", pictures[newPictureId]);

  // const renderObject = pictures.find(
  //   (element) => element.id === router.query.pictureId
  // );
  // console.log(renderObject);

  const renderObject = pictures.find((it) => {
    console.log("queryID", router.query.pictureId);

    return it.id === router.query.pictureId;
  });

  // return (
  //   <div>
  //     {pictureId !== null && (
  //       <div>
  //         <img src={`${pictures[newPictureId].img}`} />
  //         <h1>{pictures[newPictureId].description}</h1>
  //       </div>
  //     )}
  //   </div>
  // );
}
