import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ExternalLink } from "../../../../components/ExternalLink";
import { ProfileContainer, ProfileDetails, ProfilePicture } from "./styles";
import {
  faGaugeHigh,
  faPersonRunning,
  faShieldHalved,
} from "@fortawesome/free-solid-svg-icons";
import caixa from "../../../../assets/Caixa.webp";
import { SearchInput } from "../SearchInput";
import { useNavigate } from "react-router-dom";

export interface DadosUsuario {
  login: string;
  followers: number;
  bio: string;
  name: string;
  html_url: string;
  avatar_url: string;
  company?: string;
}

export function Busca() {
  const navigate = useNavigate();

  function goHistorico() {
    navigate("/historico");
  }

  return (
    <ProfileContainer>
      <>
        <ProfilePicture src={caixa} alt="Caixa" />

        <ProfileDetails>
          <header>
            <h1>Rastreie suas encomendas gratuitamente</h1>

            <ExternalLink
              as="button"
              text="Historico"
              style={{ marginRight: "-16px" }}
              onClick={goHistorico}
            />
          </header>
          <p>Informe o código de rastreio abaixo para rastreamento</p>
          <SearchInput />
          <ul>
            <li>
              <FontAwesomeIcon icon={faGaugeHigh} />
              Velocidade
            </li>

            <li>
              <FontAwesomeIcon icon={faShieldHalved} />
              Segurança
            </li>

            <li>
              <FontAwesomeIcon icon={faPersonRunning} />
              Agilidade
            </li>
          </ul>
        </ProfileDetails>
      </>
    </ProfileContainer>
  );
}
