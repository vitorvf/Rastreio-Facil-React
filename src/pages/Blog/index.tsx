import { useCallback, useContext, useEffect, useState } from "react";
import { Spinner } from "../../components/Spinner";
import { api } from "../../lib/axios";
import { Post } from "./components/Post";
import { Profile } from "./components/Profile";
import { SearchInput } from "./components/SearchInput";
import { PostsListContainer } from "./styles";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";

// export interface PostsUsuario {
//   title: string;
//   body: string;
//   created_at: string;
//   number: number;
//   html_url: string;
//   comments: string; // alterado para uma string
//   user: {
//     login: string;
//   };
// }

export interface Company {
  id: number;
  sk_company: string;
  name: string;
  is_active: number;
  jobs_frequency: string;
  created_at: string;
  updated_at: string | null;
  tracking_code: string;
  status: string;
  events: {
    events: string;
    tag: string;
    local: string;
    date: string;
    city: string | null;
    uf: string | null;
    destination_local: string | null;
    destination_city: string | null;
    destination_uf: string | null;
    comment: string | null;
  }[];
  map: Map<string, any>;
}


export function Blog() {
  const [rastreios, setRastreios] = useState<Company>();
  const navigate = useNavigate();

  // const { getPosts, isLoading } = useContext(CartContext);
  // console.log(isLoading)
// const getPosts = async (query: string = "") => {
//   try {
//     setIsLoading(true);
//     const response = await api.get(
//       `/${query}`
//     );
//     navigate(`/post/${query}`, );
    
//     setRastreios(response.data);

//   } finally {
//     setIsLoading(false);
    
//   }

// };



  // useEffect(() => {
  //   api.get(`/repos/${username}/${repo}/issues`)
    
  //     .then(response => {
  //       setPosts(response.data);
  //       setIsLoading(false);

       
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // }, []);

  return (
    <>
      <Profile />
      <SearchInput  />
      {/* {isLoading ? (
        <Spinner />
      ) : (
        <PostsListContainer>
        <Post rastreios={rastreios}/>
        </PostsListContainer>
       )}   */}
    </>
  );
}


 {/* {posts.map((post) => (
            <Post key={post.number} post={post} />
          ))}  */}



