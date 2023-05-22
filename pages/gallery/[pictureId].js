import { useRouter } from "next/router";

export default function Picture({
  object = {
    img: "/img/picture1",
    description: "notebook",
    id: 1,
  },
}) {
  // const router = useRouter();
  // const pictureId = router.query.pictureId;
  return (
    <div>
      <img src={`img/picture${object.id}.jpg`} />
      <h1>{object.description}</h1>
    </div>
  );
}
