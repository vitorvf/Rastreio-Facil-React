import styled from "styled-components";
import imgBg from "../../../../assets/white-pattern.png";

export const ProfileContainer = styled.section`
  width: 100%;
  min-height: 13.25rem;
  margin-top: -5.5rem;
  /* background-image: url(${imgBg}); */
  background: white;

  /* background: ${({ theme }) => theme.colors["base-profile"]}; */
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 2rem 2.5rem;
  display: flex;
  gap: 2rem;

  @media (max-width: 480px) {
    justify-content: center !important;
    text-align: center !important;
  }
`;

export const ProfilePicture = styled.img`
  width: 12.25rem;
  /* width: 9.25rem; */
  height: 9.25rem;
  border-radius: 8px;
  object-fit: cover;

  @media (max-width: 480px) {
    display: none;
  }

  @media screen and (min-width: 512px) and (max-width: 829px) {
    display: none;
  }
`;

export const ProfileDetails = styled.div`
  @media (max-width: 480px) {
    align-items: center;
  }
  flex: 1;
  display: flex;
  flex-direction: column;

  p {
    color: ${({ theme }) => theme.colors["base-new"]};
  }

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.5rem;

    h1 {
      font-size: ${({ theme }) => theme.textSizes["title-title-l"]};
      /* color: ${({ theme }) => theme.colors["base-title"]}; */
      color: ${({ theme }) => theme.colors["base-new"]};

      line-height: 130%;
    }
  }
  @media (max-width: 480px) {
    ul {
      gap: 9px !important;
      font-size: 13px;
    }

    li {
      gap: 7px !important;
    }

    button {
      display: none;
    }
  }
  ul {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    flex-wrap: wrap;
    margin-top: auto;

    li {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: ${({ theme }) => theme.colors["base-new"]};

      svg {
        width: 1.125rem;
        height: 1.125rem;
        color: ${({ theme }) => theme.colors["base-new"]};

        /* color: ${({ theme }) => theme.colors["base-label"]}; */
      }
    }
  }
`;
