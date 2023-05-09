import { SearchInputContainer } from "./styles";
import * as z from "zod";
import { useForm, SubmitHandler  } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useContext } from "react";
import { CartContext } from "../../../../contexts/CartContext";
import { api } from "../../../../lib/axios";


const searchFormSchema = z.object({
  query: z.string(),
});

type SearchFormInput = z.infer<typeof searchFormSchema>;

interface SearchInputProps {}

export function SearchInput(props: SearchInputProps) {
  const { register, handleSubmit } = useForm<SearchFormInput>({
    resolver: zodResolver(searchFormSchema),
  });

  const { getPosts } = useContext(CartContext);

  async function handleSearchPosts(data: SearchFormInput) {
    await getPosts(data.query);
  }

  return (
    <SearchInputContainer onSubmit={handleSubmit(handleSearchPosts)}>
      <header>
        <h3>Publicações</h3>
        <span> publicações</span>
      </header>

      <input type="text" placeholder="Buscar conteúdo" {...register("query")} />
    </SearchInputContainer>
  );
}

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