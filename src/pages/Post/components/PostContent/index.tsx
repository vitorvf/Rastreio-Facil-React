import {
  Card,
  DivResults,
  HeaderResults,
  LiResults,
  PostContentContainer,
} from "./styles";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { Company } from "../..";
// import entregue from "../../../../assets/Results/download.png";
import movimento from "../../../../assets/Results/download2.png";
import onroute from "../../../../assets/Results/onroute.png";
import out from "../../../../assets/Results/out.png";
// import postado from "../../../../assets/Results/postado.png";
import entregue from "../../../../assets/Results/entregue.svg";
import localização from "../../../../assets/Results/localização.svg";
import naoentregue from "../../../../assets/Results/nao-entregue.svg";
import pacote from "../../../../assets/Results/pacote.svg";
import postado from "../../../../assets/Results/postado.svg";
import saiuentrega from "../../../../assets/Results/saiu-entrega.svg";
import transito from "../../../../assets/Results/transito.svg";

import { relativeDateFormatter } from "../../../../utils/formatter";

// interface PostContentProps {
//   content: string;
// }

interface RastreioContent {
  data?: Company;
}

// export function PostContent({ content }: PostContentProps) {

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
                    status.events !==
                      "Objeto em trânsito - por favor aguarde" ? (
                      <img src={pacote} alt="" />
                    ) : status.events ===
                      "Objeto em trânsito - por favor aguarde" ? (
                      <img src={transito} alt="" />
                    ) : status.tag === "delivered" ? (
                      <img src={entregue} alt="" />
                    ) : status.tag === "onroute" &&
                      status.comment ===
                        "Para retirá-lo, é preciso informar o código do objeto e apresentar documentação que comprove ser o destinatário ou pessoa por ele oficialmente autorizada." ? (
                      <img src={pacote} alt="" />
                    ) : status.tag === "onroute" ? (
                      <img src={saiuentrega} alt="" />
                    ) : status.tag === "out" ? (
                      <img src={naoentregue} alt="" />
                    ) : status.tag === "posted" ? (
                      <img src={postado} alt="" />
                    ) : (
                      data?.status
                    )}

                    {/* <img src={entregue} alt="" /> */}
                  </span>

                  <p>
                    <span className="status"> {status.events}</span>
                    <span className="local">
                      <svg
                        viewBox="0 0 512 512"
                        fill="currentColor"
                        width="1em"
                        height="1em"
                        style={{
                          stroke: "#FDC93D",
                          strokeWidth: 2,
                          fill: "none",
                        }}
                      >
                        <path
                          fill="none"
                          stroke="#FDC93D"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="32px"
                          d="M256 48c-79.5 0-144 61.39-144 137c0 87 96 224.87 131.25 272.49a15.77 15.77 0 0 0 25.5 0C304 409.89 400 272.07 400 185c0-75.61-64.5-137-144-137Z"
                        ></path>
                        <circle
                          cx="256"
                          cy="192"
                          r="48"
                          fill="none"
                          stroke="#FDC93D"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="32px"
                        ></circle>
                      </svg>
                      Local: {status.local} - {status.city} / {status.uf}{" "}
                    </span>
                  </p>
                </li>
              ))}
         
        </ul>
      </DivResults>

      {/* <ReactMarkdown
        children={'ss'}
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");
            return !inline && match ? (
              <SyntaxHighlighter
                children={String(children).replace(/\n$/, "")}
                style={dracula as any}
                language={match[1]}
                PreTag="div"
                {...props}
              />
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
        }}
      /> */}
    </PostContentContainer>
  );
}
