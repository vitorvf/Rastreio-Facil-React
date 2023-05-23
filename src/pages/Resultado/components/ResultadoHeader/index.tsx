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
import { Company } from "../..";
import PostadoCinza from "../../../../assets/results/results-cinza/postado-cinza.png";
import PostadoVerde from "../../../../assets/results/results-verde/postado-verde.png";
import EncaminhadoCinza from "../../../../assets/results/results-cinza/encaminhado-cinza.png";
import EncaminhadoVerde from "../../../../assets/results/results-verde/encaminhado-verde.png";
import SaiuParaEntregaCinza from "../../../../assets/results/results-cinza/saiuparanetrega-cinza.png";
import SaiuParaEntregaVerde from "../../../../assets/results/results-verde/saiuparanetrega-verde.png";
import EntregueCinza from "../../../../assets/results/results-cinza/entregue-cinza.png";
import EntregueVerde from "../../../../assets/results/results-verde/entregue-verde.png";

interface name {
  data?: Company;
  isLoading: boolean;
}

export function ResultadoHeader({ isLoading, data }: name) {
  //Pegar a ultima data da encomenda Postada
  const postadoData = relativeDateFormatter(
    data?.events.find((event) => event.tag === "posted")?.date,
    "customFormat"
  );
  //Nesse código, find() retorna o primeiro evento que satisfaz a condição event.tag === "movement".
  //O operador ?. é usado para verificar se o evento foi encontrado antes de acessar a data.
  //Se o evento for encontrado, a data será atribuída a lastMovementDate.
  //Caso contrário, lastMovementDate será undefined.

  //Usando RelativeDateFormatter para formatar minha data.

  const encaminhadoData = relativeDateFormatter(
    data?.events.find((event) => event.tag === "movement")?.date,
    "customFormat"
  );

  const saiuEntregaData = relativeDateFormatter(
    data?.events.find(
      (event) =>
        event.events === "Objeto saiu para entrega ao destinatário" ||
        event.events === "Objeto está em rota de entrega" ||
        event.tag === "onroute"
    )?.date,
    "customFormat"
  );

  const entregueData = relativeDateFormatter(
    data?.events.find((event) => event.tag === "delivered")?.date,
    "customFormat"
  );

  const isDeliveryInPostado =
    data?.events.some((event) => event.tag === "posted") ||
    data?.events.some((event) => event.events === "Objeto postado");

  const isDeliveryInEncaminhado =
    data?.events.some((event) => event.tag === "movement") ||
    data?.events.some(
      (event) => event.events === "Objeto em trânsito - por favor aguarde"
    );

  const isDeliveryInProgress =
    data?.events.some(
      (event) => event.events === "Objeto saiu para entrega ao destinatário"
    ) ||
    data?.events.some(
      (event) => event.events === "Objeto está em rota de entrega"
    );

  const IsDeliveryEntregue =
    data?.events.some(
      (event) => event.events === "Objeto entregue ao destinatário"
    ) ||
    data?.events.some(
      (event) => event.events === "Objeto entregue ao destinatário"
    );

  <h5
    style={{
      color: isDeliveryInEncaminhado ? "#2bc866" : "rgb(200, 205, 218)",
    }}
  >
    Encaminhado
  </h5>;

  const navigate = useNavigate();

  function goBack() {
    navigate(-1);
  }

  function goHistory() {
    navigate("/historico");
  }

  return (
    <PostHeaderContainer>
      {isLoading ? (
        <Spinner />
      ) : (
        <div>
          <header>
            <ExternalLink
              as="button"
              onClick={goBack}
              icon={<FontAwesomeIcon icon={faChevronLeft} />}
              text="Voltar"
              variant="iconLeft"
            />

            <ExternalLink
              as="button"
              text="Historico de Rastreios"
              target="_blank"
              onClick={goHistory}
            />
          </header>

          <DivHeader className="infostyle__ContornPosition-sc-1wgwhwr-4 hEDUmL">
            <SecondDiv className="infostyle__CardDiv-sc-1wgwhwr-5 eYAzqh">
              <ImgSpan
                className="imgspan"
                style={{
                  backgroundImage: `url(${
                    isDeliveryInPostado ? PostadoVerde : PostadoCinza
                  })`,
                }}
              ></ImgSpan>
              <TextoSpan>
                <h5
                  style={{
                    color: isDeliveryInPostado
                      ? `#2bc866	`
                      : "rgb(200, 205, 218)",
                  }}
                >
                  Postado
                </h5>
                <span>{postadoData}</span>
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
                    isDeliveryInEncaminhado
                      ? EncaminhadoVerde
                      : EncaminhadoCinza
                  })`,
                }}
              ></ImgSpan2>
              <TextoSpan>
                <h5
                  style={{
                    color: isDeliveryInEncaminhado
                      ? `#2bc866	`
                      : "rgb(200, 205, 218)",
                  }}
                >
                  Encaminhado
                </h5>
                <span>{encaminhadoData}</span>
              </TextoSpan>

              <Linha
                style={{
                  backgroundColor: isDeliveryInEncaminhado
                    ? "rgb(43, 200, 102)"
                    : "rgb(200, 205, 218)",
                }}
              ></Linha>
            </SecondDiv>

            <SecondDiv className="infostyle__CardDiv-sc-1wgwhwr-5 eYAzqh">
              <ImgSpan3
                style={{
                  backgroundImage: `url(${
                    isDeliveryInProgress
                      ? SaiuParaEntregaVerde
                      : SaiuParaEntregaCinza
                  })`,
                }}
              ></ImgSpan3>

              <TextoSpan>
                <h5
                  style={{
                    color: isDeliveryInProgress
                      ? `#2bc866	`
                      : "rgb(200, 205, 218)",
                  }}
                >
                  Saiu para a entrega
                </h5>
                <span>{saiuEntregaData}</span>
              </TextoSpan>
              <Linha
                style={{
                  backgroundColor: IsDeliveryEntregue
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
                    IsDeliveryEntregue ? EntregueVerde : EntregueCinza
                  })`,
                }}
              ></ImgSpan>
              <TextoSpan>
                <h5
                  style={{
                    color: IsDeliveryEntregue
                      ? `#2bc866	`
                      : "rgb(200, 205, 218)",
                  }}
                >
                  Entregue
                </h5>
                <span>{entregueData}</span>
              </TextoSpan>
            </SecondDiv>
          </DivHeader>
        </div>
      )}
    </PostHeaderContainer>
  );
}
