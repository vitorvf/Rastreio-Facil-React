import styled from "styled-components";

export const DivTest = styled.div`
  max-width: 74rem;
  height: calc(100vh - 10rem);
  margin: 5rem auto;
  margin-top: -5.5rem;
  padding: 2.5rem;
  background-color: white;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  /* box-shadow: 0px 2px 28px rgba(0,0,0,0.2); */
  /* border-radius: 10px; */
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
  padding: 3.5rem;
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 1.5rem;
    color: ${(props) => props.theme["base-blue"]};
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

    th {
      background-color: ${(props) => props.theme["new-base-blue"]};
      padding: 1rem;
      text-align: left;
      color: ${(props) => props.theme["gray-100"]};
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
      }

      & svg {
        margin-left: 0.5rem; // espaçamento entre o span e o svg
      }

      &:first-child {
        width: 100%;
        padding-left: 1.5rem;
      }

      &:last-child {
        padding-right: 1.5rem;
      }
    }
  }
`;

const STATUS_COLORS = {
  yellow: "yellow-500",
  green: "green-500",
  red: "red-500",
} as const;

interface StatusProps {
  statusColor: keyof typeof STATUS_COLORS;
}

export const Status = styled.span<StatusProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: "";
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background: ${(props) => props.theme[STATUS_COLORS[props.statusColor]]};
  }
`;
