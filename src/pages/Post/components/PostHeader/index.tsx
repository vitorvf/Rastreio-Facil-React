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
import { useContext, useEffect, useState } from "react";
import { api } from "../../../../lib/axios";
import { CartContext } from "../../../../contexts/CartContext";





export function PostHeader() {
  const navigate = useNavigate();
  const { rastreios } = useContext(CartContext);


  function goBack() {
    navigate(-1);
  }

  // const formattedDate = relativeDateFormatter(postData?.created_at);

  return (
    <PostHeaderContainer>
      {/* {isLoading ? (
        <Spinner />
      ) : ( */}
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
            
              target="_blank"
            />
          </header>

          <h1>{rastreios?.status}</h1>
          <ul>
            <li>
              <FontAwesomeIcon icon={faGithub} />
             login
            </li>
            <li>
              <FontAwesomeIcon icon={faCalendar} />
          data
            </li>
            <li>
              <FontAwesomeIcon icon={faComment} />
            comentários
            </li>
          </ul>
        </>
       {/* )}  */}
    </PostHeaderContainer>
  );
}
