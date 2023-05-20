import {
  Card,
  DivResults,
  HeaderResults,
  ImgLocation,
  PostContentContainer,
} from "./styles";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { Company } from "../..";
import entregue from "../../../../assets/Results/entregue.svg";
import localização from "../../../../assets/Results/localização.svg";
import naoentregue from "../../../../assets/Results/nao-entregue.svg";
import pacote from "../../../../assets/Results/pacote.svg";
import postado from "../../../../assets/Results/postado.svg";
import saiuentrega from "../../../../assets/Results/saiu-entrega.svg";
import transito from "../../../../assets/Results/transito.svg";
import location from "../../../../assets/Results/svgexport-5.svg";

import { relativeDateFormatter } from "../../../../utils/formatter";

interface RastreioContent {
  data?: Company;
}
export function PostContent({ data }: RastreioContent) {
  return (
    <PostContentContainer>
      {/* <div>{data?.created_at}</div> */}
      <DivResults>
        {/* {!data?.success && <h1>{data?.message}</h1>} */}
        <ul className="conteudo">
          {data?.events
            ?.sort((a, b) => (a.date < b.date ? 1 : -1))
            .map((status, index) => (
              <li className="item-rastreio" key={index}>
                <div className="linha-dotted"></div>
                <span className="data-item">
                  {relativeDateFormatter(status.date, "customFormat")}
                </span>
                <span className="icone-rastreio">
                  {status.tag === "movement" &&
                  status.events !== "Objeto em trânsito - por favor aguarde" ? (
                    <img src={pacote} alt="pacote" />
                  ) : status.events ===
                    "Objeto em trânsito - por favor aguarde" ? (
                    <img src={transito} alt="transito" />
                  ) : status.tag === "delivered" ? (
                    <img src={entregue} alt="entregue" />
                  ) : status.tag === "onroute" &&
                    status.comment ===
                      "Para retirá-lo, é preciso informar o código do objeto e apresentar documentação que comprove ser o destinatário ou pessoa por ele oficialmente autorizada." ? (
                    <img src={pacote} alt="pacote" />
                  ) : status.tag === "onroute" ? (
                    <img src={saiuentrega} alt="saiu para entrega" />
                  ) : status.tag === "out" ? (
                    <img src={naoentregue} alt="nao entregue" />
                  ) : status.tag === "posted" ? (
                    <img src={postado} alt="postado" />
                  ) : (
                    data?.status
                  )}
                </span>

                <p>
                  <span className="status"> {status.events}</span>
                  <span className="local">
                    <ImgLocation src={location} alt="location" />
                    Local: {status.local} - {status.city} / {status.uf}{" "}
                  </span>
                </p>
              </li>
            ))}
        </ul>
      </DivResults>
    </PostContentContainer>
  );
}
