import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ExternalLink } from "../../../../components/ExternalLink";
import { ProfileContainer, ProfileDetails, ProfilePicture } from "./styles";
import {
  faGaugeHigh,
  faPersonRunning,
  faShieldHalved,
} from "@fortawesome/free-solid-svg-icons";
import { useCallback, useEffect, useState } from "react";
import caixa from "../../../../assets/Caixa.svg";
import { SearchInput } from "../SearchInput";

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
  return (
    <ProfileContainer>
      <>
        <ProfilePicture src={caixa} />

        <ProfileDetails>
          <header>
            <h1>Rastreie suas encomendas gratuitamente</h1>

            <ExternalLink text="Github" href="" target="_blank" />
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
