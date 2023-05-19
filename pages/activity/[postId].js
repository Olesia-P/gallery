import { useRouter } from "next/router";

export default function Post() {
  const router = useRouter();
  const postId = router.query.postId;
  return <h1>This is post # {postId}</h1>;
}
