import styled from "styled-components";

export const AvisoErro = styled.small`
  color: red;
`;

export const Rastrear = styled.span`
  margin-left: 5px;

  @media (max-width: 480px) {
    font-size: 0;
    visibility: hidden;
  }

  @media screen and (min-width: 512px) and (max-width: 829px) {
    display: none;
  }
`;

export const SearchInputContainer = styled.form`
  display: flex;
  position: relative;
  width: 82%;
  margin-bottom: 1rem;

  @media (max-width: 480px) {
    width: 92%;
  }

  button {
    padding: 9px;
    right: 0px;
    position: absolute;
    color: white;
    background: #0450a0;
    border: none;
    border-radius: 0 6px 8px 0;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.3s ease 0s;
    width: 25%;

    @media (max-width: 480px) {
      display: flex;
      justify-content: center;
    }

    svg {
      @media (max-width: 480px) {
        margin-left: 5px;
        height: 23px;
      }
    }
  }

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.85rem;

    @media (max-width: 480px) {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    h3 {
      font-size: ${({ theme }) => theme.textSizes["title-title-s"]};
      color: ${({ theme }) => theme.colors["base-subtitle"]};
    }

    span {
      font-size: ${({ theme }) => theme.textSizes["text-text-s"]};
      color: ${({ theme }) => theme.colors["base-span"]};
    }
  }

  input {
    width: 100%;
    //Antigo
    /* padding: 0.75rem 1rem; */
    padding: 0.5rem 1rem;
    border-radius: 6px;
    /* background: ${({ theme }) => theme.colors["base-input"]}; */
    border: 1px solid ${({ theme }) => theme.colors["base-input-border"]};
    color: ${({ theme }) => theme.colors["base-text"]};
    transition: 0.4s;

    &:focus {
      border-color: ${({ theme }) => theme.colors["brand-blue"]};
      outline: none;
    }

    &::placeholder {
      color: ${({ theme }) => theme.colors["base-label"]};
    }
  }
`;
