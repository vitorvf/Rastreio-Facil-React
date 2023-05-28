import { AvisoErro, Rastrear, SearchInputContainer } from "./styles";
import * as z from "zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useContext } from "react";
import { CartContext } from "../../../../contexts/CartContext";
import { api } from "../../../../lib/axios";
import { useNavigate } from "react-router-dom";
import {
  faMagnifyingGlass,
  faPersonRunning,
  faShieldHalved,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { SubmitHandler, useForm } from "react-hook-form";
// import { useNavigate } from "react-router-dom";
// import { z } from "zod";
// import { useGlobalContext } from "../contexts/GlobalContext";

const schema = z
  .object({
    code: z.string().refine((value) => /^[A-Z]{2}\d{9}[A-Z]{2}$/.test(value), {
      message: "Digite um código válido.",
    }),
  })
  .required();
type Schema = z.infer<typeof schema> & { code: string };

export function SearchInput() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: { code: "" },
  });

  const navigate = useNavigate();
  const { setCode } = useContext(CartContext);

  const handleValid: SubmitHandler<Schema> = (data) => {
    setCode(data.code);

    const existingHistory = localStorage.getItem("trackingHistory");
    const history = existingHistory ? JSON.parse(existingHistory) : [];

    if (!history.includes(data.code)) {
      history.push(data.code);
      localStorage.setItem("trackingHistory", JSON.stringify(history));
    }

    navigate(`/tracking/${data.code}`);
  };
  return (
    <>
      <header>
        {/* <h3>Publicações</h3>
         <span> publicações</span> */}
        <AvisoErro>{errors.code?.message}</AvisoErro>
      </header>
      <SearchInputContainer onSubmit={handleSubmit(handleValid)}>
        <input
          style={{ border: errors.code ? "1px solid red" : "" }}
          placeholder="EX: ON123456789BR"
          {...register("code")}
        />

        <button>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <Rastrear>Rastrear</Rastrear>
        </button>
      </SearchInputContainer>
    </>
  );
}

//Ultimo antigo, o mais recente.

// const searchFormSchema = z.object({
//   query: z.string(),
// });

// type SearchFormInput = z.infer<typeof searchFormSchema>;

// interface SearchInputProps {}

// export function SearchInput(props: SearchInputProps) {
//   const { register, handleSubmit } = useForm<SearchFormInput>({
//     resolver: zodResolver(searchFormSchema),
//   });

//   const { getPosts } = useContext(CartContext);

//   async function handleSearchPosts(data: SearchFormInput) {
//     await getPosts(data.query);
//   }

//   return (
//     <SearchInputContainer onSubmit={handleSubmit(handleSearchPosts)}>
//       <header>
//         <h3>Publicações</h3>
//         <span> publicações</span>
//       </header>

//       <input type="text" placeholder="Buscar conteúdo" {...register("query")} />
//     </SearchInputContainer>
//   );
// }

//Antigo dos Antigos

// const searchFormSchema = z.object({
//   query: z.string(),
// });

// type SearchFormInput = z.infer<typeof searchFormSchema>;

// interface SearchInputProps {
//   // postsLength: number;
//   getPosts: (query?: string) => Promise<void>;
// }

// export function SearchInput({ getPosts }: SearchInputProps) {
//   const { register, handleSubmit } = useForm<SearchFormInput>({
//     resolver: zodResolver(searchFormSchema),
//   });

//   async function handleSearchPosts(data: SearchFormInput) {
//     await getPosts(data.query);
//   }

//   return (
//     <SearchInputContainer onSubmit={handleSubmit(handleSearchPosts)}>
//       <header>
//         <h3>Publicações</h3>
//         <span> publicações</span>
//       </header>

//       <input type="text" placeholder="Buscar conteúdo" {...register("query")} />
//     </SearchInputContainer>
//   );
// }
