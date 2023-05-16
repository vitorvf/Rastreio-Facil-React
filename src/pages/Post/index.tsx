import { useCallback, useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { api } from "../../lib/axios";
// import { PostsUsuario } from "../Blog";
import { PostContent } from "./components/PostContent";
import { PostHeader } from "./components/PostHeader";
import { CartContext } from "../../contexts/CartContext";
import { Spinner } from "../../components/Spinner";

// export interface PostHeaderType extends PostsUsuario {
//   followers: number;
//   bio: string;
//   name: string;
//   avatar_url: string;
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

export function Post() {
  const params = useParams();
  const code = params.code as string;
  const [data, setData] = useState<Company>();
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  // const [postData, setPostData] = useState<PostHeaderType>({} as PostHeaderType);
  // const [isLoading, setIsLoading] = useState(true);
  // const {rastreios, isLoading} = useContext(CartContext)
  // const { id } = useParams();

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
  useEffect(() => {
    setIsLoading(true);

    api(code)
      .then((response) => setData(response.data.data))
      .catch((err) => setError(err))
      .finally(() => setIsLoading(false));
  }, [code]);
  const ultimaData = data?.events
    .map((event) => event.date)
    .sort()
    .reverse()
    .shift();

  return (
    <>
      {/* <div>
      <Link to="/">Voltar</Link>
      <h1>Tracking Page</h1>
      <pre><code>{JSON.stringify({ code })}</code></pre>
      {error && <p>{String(error)}</p>}
      {isLoading &&  <Spinner />}
      {data && <pre><code>{JSON.stringify(data, null, 4)}</code></pre>}
    </div> */}
      <PostHeader data={data} isLoading={isLoading} />
      {!isLoading && <PostContent data={data} />}

      {/* <PostHeader />
    {!isLoading && <PostContent/>} */}
      {/* <PostHeader isLoading={isLoading} postData={postData} />
      {!isLoading && <PostContent content={postData.body} />} */}
    </>
  );
}
// {isLoading ? (
//   <Spinner />
// ) : (
