import { useRouter } from "next/router";
import css from "../../styles/global.module.scss";

export default function Post() {
  const router = useRouter();
  const postId = router.query.postId;
  return <h1 className={css.h1}>This is post # {postId}</h1>;
}
