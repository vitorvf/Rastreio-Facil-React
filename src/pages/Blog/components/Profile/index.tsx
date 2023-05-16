import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ExternalLink } from "../../../../components/ExternalLink";
import { ProfileContainer, ProfileDetails, ProfilePicture } from "./styles";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGaugeHigh, faPersonRunning, faShieldHalved } from "@fortawesome/free-solid-svg-icons";
import { useCallback, useEffect, useState } from "react";
import { api } from "../../../../lib/axios";
import { Spinner } from "../../../../components/Spinner";
import caixa from "../../../../assets/Caixa.svg"
import { SearchInput } from "../SearchInput";

export interface DadosUsuario {
  login: string;
  followers: number;
  bio: string;
  name: string;
  html_url:string;
  avatar_url:string;
  company?:string;
}



export function Profile() {

  const [isLoading, setIsLoading] = useState(false);
  const [profileData, setProfileData] = useState<DadosUsuario | null>(null);
  // const username = 'vitorvf'


  // useEffect(() => {
  //   api.get(`/users/${username}`)
  //     .then(response => {
  //       setProfileData(response.data);
  //       setIsLoading(false)
       
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // }, []);


  return (
    <ProfileContainer>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <ProfilePicture src={caixa}/>
        

          <ProfileDetails>
            <header>
              <h1>Rastreie suas encomendas gratuitamente</h1>

              <ExternalLink
                text="Github"
                href={profileData?.html_url}
                target="_blank"
              />
            </header>
            <p>Informe o código de rastreio abaixo para rastreamento</p>
            <SearchInput  />
            <ul>
              <li>
                <FontAwesomeIcon icon={faGaugeHigh} />
              Velocidade
              </li>
              {/* {profileData?.company && ( */}
                <li>
                  {/* <FontAwesomeIcon icon={faBuilding} /> */}
                  <FontAwesomeIcon icon={faShieldHalved} />
                 Segurança
                </li>
              {/* )} */}
              <li>
                <FontAwesomeIcon icon={faPersonRunning} />
               Agilidade
              </li>
            </ul>
          </ProfileDetails>
        </>
       )} 
    </ProfileContainer>
  );
}
