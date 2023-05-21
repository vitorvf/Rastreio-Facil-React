import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../lib/axios";
// import { PostsUsuario } from "../Blog";
import { CartContext } from "../../contexts/CartContext";
import { ResultadoHeader } from "./components/ResultadoHeader";
import { ResultadoContent } from "./components/ResultadoContent";

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

export function Resultado() {
  const params = useParams();
  const code = params.code as string;
  const [data, setData] = useState<Company>();
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState(false);

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
      <ResultadoHeader data={data} isLoading={isLoading} />
      {!isLoading && <ResultadoContent data={data} />}
    </>
  );
}
