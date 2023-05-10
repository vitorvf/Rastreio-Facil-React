import { SearchInputContainer } from "./styles";
import * as z from "zod";
import { useForm, SubmitHandler  } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useContext } from "react";
import { CartContext } from "../../../../contexts/CartContext";
import { api } from "../../../../lib/axios";
import { useNavigate } from "react-router-dom";


// import { zodResolver } from "@hookform/resolvers/zod";
// import { SubmitHandler, useForm } from "react-hook-form";
// import { useNavigate } from "react-router-dom";
// import { z } from "zod";
// import { useGlobalContext } from "../contexts/GlobalContext";

const schema = z.object({ code: z.string().min(1).max(255) }).required();
type Schema = z.infer<typeof schema>;

export function SearchInput () {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
    defaultValues: { code: "" },
  });

  const navigate = useNavigate();
  const { setCode } = useContext(CartContext);

  const handleValid: SubmitHandler<Schema> = (data) => {
    setCode(data.code);
    navigate(`/tracking/${data.code}`);
  };

  return (
    <SearchInputContainer  onSubmit={handleSubmit(handleValid)}>
       <header>
         <h3>Publicações</h3>
         <span> publicações</span>
       </header>
       <input placeholder="Rastrear Encomendas" {...register("code")} />

       {/* <input type="text" placeholder="Buscar conteúdo" {...register("query")} /> */}
    </SearchInputContainer>

    // <form onSubmit={handleSubmit(handleValid)}>
    //   <input {...register("code")} />
    //   <small>{errors.code?.message}</small>
    //   <button type="submit">Track</button>
    // </form>
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