import styled from "styled-components";

export const DivTest = styled.div`
  max-width: 74rem;
  height: calc(100vh - 13rem);
  margin: 5rem auto;
  margin-top: -5.5rem;
  padding: 2.5rem;
  background-color: white;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  display: flex;
  flex-direction: column;

  margin-top: -5.5rem;

  header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1.25rem;
  }
`;

export const HistoryContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 1.5rem;
    color: ${(props) => props.theme["base-blue"]};
    text-align: center;
  }
`;

export const HistoryList = styled.div`
  flex: 1;
  overflow: auto;
  margin-top: 2rem;

  table {
    width: 100%;
    border-collapse: collapse;
    min-width: 600px;

    @media (max-width: 767px) {
      min-width: 100px;
    }

    th {
      background-color: ${(props) => props.theme["new-base-blue"]};
      padding: 1rem;
      text-align: center;
      text-transform: uppercase;
      color: #afc2d4;
      font-size: 12px;
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
    }
    font-size: 0.875rem;
    line-height: 1.6;

    &:first-child {
      border-top-left-radius: 8px;
      padding-left: 1.5rem;
    }

    &:last-child {
      border-top-right-radius: 8px;
      padding-right: 1.5rem;
    }
  }

  td {
    display: flex;
    align-items: center;
    background-color: ${(props) => props.theme["base-blue"]};
    border-top: 4px solid ${(props) => props.theme["base-border-blue"]};
    padding: 1rem;
    font-size: 0.875rem;
    line-height: 1.6;

    & img {
      width: 26px;
      margin-right: 0.5rem;
    }

    & span {
      flex: 1; // ocupa o espaço disponível no centro
      text-align: center; // centraliza o texto horizontalmente
      color: white;
    }

    & svg {
      margin-left: 0.5rem; // espaçamento entre o span e o svg
    }

    &:first-child {
      width: 100%;
      padding-left: 1.5rem;
    }

    &.last-td {
      border-bottom-right-radius: 8px;
      border-bottom-left-radius: 8px;
    }
  }
`;

export const ImgDelete = styled.img`
  margin-left: 0.5rem; // espaçamento entre o span e o svg
  cursor: pointer;
  width: 26px !important;
  /* height: 17px; */
`;

export const ParafragoNaoEncontrado = styled.p`
  text-align: center;
`;
