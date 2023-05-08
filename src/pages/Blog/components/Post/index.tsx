import { Company,  } from "../..";
import { relativeDateFormatter } from "../../../../utils/formatter";
import { PostContainer } from "./styles";

interface PostProps {
  rastreios?: Company[];
}

export function Post({ rastreios }: PostProps) {
  // const formattedDate = relativeDateFormatter(post.created_at);

  return (
    // to={`/post/${post.number}`}
    <PostContainer to={'/'}>
      <div>
        <strong>Title</strong>
        <span>formattedDate</span>
      </div>
      <p>Body</p>
    </PostContainer>
  );
}
