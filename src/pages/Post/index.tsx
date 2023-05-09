import { useCallback, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../lib/axios";
import { PostsUsuario } from "../Blog";
import { PostContent } from "./components/PostContent";
import { PostHeader } from "./components/PostHeader";
import { CartContext } from "../../contexts/CartContext";

export interface PostHeaderType extends PostsUsuario {
  followers: number;
  bio: string;
  name: string;
  avatar_url: string;
}

export function Post() {
  const [postData, setPostData] = useState<PostHeaderType>({} as PostHeaderType);
  const [isLoading, setIsLoading] = useState(true);
  const {rastreios} = useContext(CartContext)
  console.log(rastreios)
  const { id } = useParams();
  


  // useEffect(() => {
  //   api.get(`/NL526277041BR/`)
  //     .then(response => {
  //       setPostData(response.data);
  //       setIsLoading(false);
  //       console.log(response.data)

       
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // }, []);


  return (
    <>
    <PostHeader />
      {/* <PostHeader isLoading={isLoading} postData={postData} />
      {!isLoading && <PostContent content={postData.body} />} */}
    </>
  );
}
