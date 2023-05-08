import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faCalendar,
  faChevronLeft,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { ExternalLink } from "../../../../components/ExternalLink";
import { Spinner } from "../../../../components/Spinner";
import { relativeDateFormatter } from "../../../../utils/formatter";
import { PostHeaderContainer } from "./styles";
import { PostsUsuario } from "../../../Blog";
import { DadosUsuario } from "../../../Blog/components/Profile";
import { useEffect, useState } from "react";
import { api } from "../../../../lib/axios";



export interface PostHeaderType {
  title:string;
  followers: number;
  bio: string;
  name: string;
  html_url:string;
  avatar_url:string;
  company?:string;
  comments?:string;
  created_at: string;

  user:{
    login: string;

  }

}

interface PostHeaderProps {
  postData: PostHeaderType;
  isLoading: boolean;
}

export function PostHeader({postData, isLoading }:PostHeaderProps) {
  const navigate = useNavigate();


  function goBack() {
    navigate(-1);
  }

  const formattedDate = relativeDateFormatter(postData?.created_at);

  return (
    <PostHeaderContainer>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <header>
            <ExternalLink
              as="button"
              onClick={goBack}
              icon={<FontAwesomeIcon icon={faChevronLeft} />}
              text="Voltar"
              variant="iconLeft"
            />
            <ExternalLink
              text="Ver no Github"
              href={postData?.html_url}
              target="_blank"
            />
          </header>

          <h1>{postData?.title}</h1>
          <ul>
            <li>
              <FontAwesomeIcon icon={faGithub} />
              {postData?.user.login}
            </li>
            <li>
              <FontAwesomeIcon icon={faCalendar} />
            {formattedDate}
            </li>
            <li>
              <FontAwesomeIcon icon={faComment} />
              {postData?.comments} comentários
            </li>
          </ul>
        </>
       )} 
    </PostHeaderContainer>
  );
}
