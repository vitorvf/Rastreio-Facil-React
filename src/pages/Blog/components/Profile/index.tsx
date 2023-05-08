import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ExternalLink } from "../../../../components/ExternalLink";
import { ProfileContainer, ProfileDetails, ProfilePicture } from "./styles";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBuilding, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { useCallback, useEffect, useState } from "react";
import { api } from "../../../../lib/axios";
import { Spinner } from "../../../../components/Spinner";


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

  const [isLoading, setIsLoading] = useState(true);
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
          <ProfilePicture src={profileData?.avatar_url}/>

          <ProfileDetails>
            <header>
              <h1>{profileData?.name}</h1>

              <ExternalLink
                text="Github"
                href={profileData?.html_url}
                target="_blank"
              />
            </header>
            <p>{profileData?.bio}</p>
            <ul>
              <li>
                <FontAwesomeIcon icon={faGithub} />
                {profileData?.login}
              </li>
              {profileData?.company && (
                <li>
                  <FontAwesomeIcon icon={faBuilding} />
                  {profileData?.company}
                </li>
              )}
              <li>
                <FontAwesomeIcon icon={faUserGroup} />
               {profileData?.followers} Seguidores
              </li>
            </ul>
          </ProfileDetails>
        </>
       )} 
    </ProfileContainer>
  );
}
