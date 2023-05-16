import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faCalendar,
  faChevronLeft,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";
import { ExternalLink } from "../../../../components/ExternalLink";
import { Spinner } from "../../../../components/Spinner";
import { relativeDateFormatter } from "../../../../utils/formatter";
import {
  DivHeader,
  ImgSpan,
  ImgSpan2,
  ImgSpan3,
  Linha,
  PostHeaderContainer,
  SecondDiv,
  TextoSpan,
} from "./styles";
// import { PostsUsuario } from "../../../Blog";
import { DadosUsuario } from "../../../Blog/components/Profile";
import { useContext, useEffect, useState } from "react";
import { api } from "../../../../lib/axios";
import { CartContext } from "../../../../contexts/CartContext";
import { Company } from "../..";
import EncaminhadoCinza from "../../../../assets/Results/encaminhado-cinza.png";

interface name {
  data?: Company;
  isLoading: boolean;
}

export function PostHeader({ isLoading, data }: name) {
  const ultimaData = data?.events
    .map((event) => event.date)
    .sort()
    .reverse()
    .shift();
  // const cities = data?.events.map(event => event.city);
  const lastCity = data?.events.map((event) => event.city).pop();
  const local = data?.events.map((event) => event.local).pop();

  const lastUf = data?.events.map((event) => event.uf).pop();

  console.log(lastCity);
  const navigate = useNavigate();
  const formattedDate = relativeDateFormatter(ultimaData);

  return (
    <PostHeaderContainer>
      {isLoading ? (
        <Spinner />
      ) : (
        <div>
          <DivHeader className="infostyle__ContornPosition-sc-1wgwhwr-4 hEDUmL">
            <SecondDiv className="infostyle__CardDiv-sc-1wgwhwr-5 eYAzqh">
              <ImgSpan
                className="imgspan"
                style={{
                  backgroundImage: `url(${
                    data?.events[0].tag === "posted"
                      ? "https://rastreiovf.netlify.app/images/postado-verde.png"
                      : ""
                  })`,
                }}
                // style={{
                //   backgroundImage:
                //     "url('https://rastreiovf.netlify.app/images/postado-cinza.png')",
                // }}
              ></ImgSpan>
              <TextoSpan>
                <h5
                  style={{
                    color:
                      data?.events[0]?.tag === "posted"
                        ? `#2bc866	`
                        : "rgb(200, 205, 218)",
                  }}
                >
                  Postado
                </h5>
                <span>2023-04-23 13:59:00</span>
              </TextoSpan>

              <Linha
                style={{
                  backgroundColor:
                    data?.events[0]?.tag === "posted"
                      ? "rgb(43, 200, 102)"
                      : "rgb(200, 205, 218)",
                }}
              ></Linha>
            </SecondDiv>

            <SecondDiv>
              <ImgSpan2
                style={{
                  backgroundImage: `url(${
                    data?.events[1]?.tag === "movement"
                      ? "https://i.imgur.com/cwcoCO1.png"
                      : ""
                  })`,
                }}

                // style={{
                //   backgroundImage:
                //     "url('https://rastreiovf.netlify.app/images/postado-cinza.png')",
                // }}
              >
                {/* <img src={EncaminhadoCinza} alt="" /> */}
              </ImgSpan2>
              <TextoSpan>
                <h5
                  style={{
                    color:
                      data?.events[1]?.tag === "movement"
                        ? `#2bc866	`
                        : "rgb(200, 205, 218)",
                  }}
                >
                  Encaminhado
                </h5>
                <span>2023-04-27 06:02:00</span>
              </TextoSpan>

              <Linha
                style={{
                  backgroundColor:
                    data?.events[1]?.tag === "movement"
                      ? "rgb(43, 200, 102)"
                      : "rgb(200, 205, 218)",
                }}
              ></Linha>
            </SecondDiv>

            <SecondDiv className="infostyle__CardDiv-sc-1wgwhwr-5 eYAzqh">
              <ImgSpan3
                style={{
                  backgroundImage: `url(${
                    data?.events[7]?.tag === "onroute"
                      ? "https://rastreiovf.netlify.app/images/saiu-verde.png"
                      : "https://rastreiovf.netlify.app/images/saiu-cinza.png"
                  })`,
                }}
              ></ImgSpan3>
              <TextoSpan>
                <h5
                  style={{
                    color:
                      data?.events[7]?.tag === "onroute"
                        ? `#2bc866	`
                        : "rgb(200, 205, 218)",
                  }}
                >
                  Saiu para a entrega
                </h5>
                <span>2023-04-28 12:39:00</span>
              </TextoSpan>
              <Linha
                style={{
                  backgroundColor:
                    data?.events[7]?.tag === "onroute"
                      ? "rgb(43, 200, 102)"
                      : "rgb(200, 205, 218)",
                }}
              ></Linha>
            </SecondDiv>

            <SecondDiv className="infostyle__CardDiv-sc-1wgwhwr-5 eYAzqh">
              <ImgSpan
                className="imgspan4"
                style={{
                  backgroundImage: `url(${
                    data?.events[11]?.tag === "delivered"
                      ? "https://rastreiovf.netlify.app/images/entregue-verde.png"
                      : "https://rastreiovf.netlify.app/images/entregue-cinza.png"
                  })`,
                }}
              ></ImgSpan>
              <TextoSpan>
                <h5
                  style={{
                    color:
                      data?.events[11]?.tag === "delivered"
                        ? `#2bc866	`
                        : "rgb(200, 205, 218)",
                  }}
                >
                  Entregue
                </h5>
                <span>2023-04-29 05:13:00</span>
              </TextoSpan>
            </SecondDiv>
          </DivHeader>
        </div>
      )}
    </PostHeaderContainer>
  );
}
