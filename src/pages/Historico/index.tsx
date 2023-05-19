import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ExternalLink } from "../../components/ExternalLink";
import { DivTest, HistoryContainer, HistoryList, Status } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
export function Historico() {
  const navigate = useNavigate();
  const [trackingHistory, setTrackingHistory] = useState<string[]>([]);

  useEffect(() => {
    const existingHistory = localStorage.getItem("trackingHistory");
    if (existingHistory) {
      setTrackingHistory(JSON.parse(existingHistory));
    }
  }, []);

  const handleTrackingClick = (trackingCode: string) => {
    navigate(`/tracking/${trackingCode}`);
  };

  const handleRemoveTrackingCode = (trackingCode: string) => {
    const updatedHistory = trackingHistory.filter(
      (code) => code !== trackingCode
    );
    setTrackingHistory(updatedHistory);
    localStorage.setItem("trackingHistory", JSON.stringify(updatedHistory));
  };

  function gohome() {
    navigate("/");
  }

  function goGit() {
    navigate("/");
  }
  return (
    <DivTest>
      <header>
        <ExternalLink
          as="button"
          onClick={gohome}
          icon={<FontAwesomeIcon icon={faChevronLeft} />}
          text="Voltar"
          variant="iconLeft"
        />

        <ExternalLink
          as="button"
          text="Ver no Historico de Rastreios"
          target="_blank"
          onClick={goGit}
        />
      </header>

      <HistoryContainer>
        <h1>Histórico de Consultas</h1>
        {trackingHistory.length > 0 ? (
          <HistoryList>
            <table>
              <thead>
                <tr>
                  <th>Tarefa</th>
                  {/* <th>Duração</th> */}
                  {/* <th>Duração</th>
                  <th>Status</th> */}
                </tr>
              </thead>
              {trackingHistory.map((trackingCode, index) => (
                <tbody key={index}>
                  <tr>
                    <td
                      onClick={() => handleTrackingClick(trackingCode)}
                      style={{ cursor: "pointer" }}
                    >
                      <img
                        src="https://rastreamentocorreios.info/img/img-package.png"
                        alt="Ícone"
                      ></img>
                      <span>{trackingCode}</span>

                      <svg
                        onClick={(event) => {
                          event.stopPropagation();
                          handleRemoveTrackingCode(trackingCode);
                        }}
                        style={{ cursor: "pointer" }}
                        xmlns="http://www.w3.org/2000/svg"
                        width="17"
                        height="17"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                        class="_trashIcon_130gk_46"
                      >
                        <rect width="256" height="256" fill="none"></rect>
                        <line
                          x1="216"
                          y1="56"
                          x2="40"
                          y2="56"
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="16"
                        ></line>
                        <line
                          x1="104"
                          y1="104"
                          x2="104"
                          y2="168"
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="16"
                        ></line>
                        <line
                          x1="152"
                          y1="104"
                          x2="152"
                          y2="168"
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="16"
                        ></line>
                        <path
                          d="M200,56V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V56"
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="16"
                        ></path>
                        <path
                          d="M168,56V40a16,16,0,0,0-16-16H104A16,16,0,0,0,88,40V56"
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="16"
                        ></path>
                      </svg>
                    </td>
                    {/* <td>1 minutos</td>
                    <td>data</td> */}
                    {/* <td>
                      <Status statusColor="green">Concluído</Status>
                    </td> */}
                  </tr>
                </tbody>
              ))}
            </table>
          </HistoryList>
        ) : (
          <p>Nenhum rastreamento encontrado.</p>
        )}
      </HistoryContainer>
    </DivTest>
  );
}

// <div>
//   <ExternalLink
//     text="Ver no Historico de Rastreios"
//     target="_blank"
//     onClick={gohome}
//   />
//   <h2>Histórico de Consultas</h2>
//   {trackingHistory.length > 0 ? (
//     <ul>
//       {trackingHistory.map((trackingCode, index) => (
//         <li key={index}>
//           <span
//             onClick={() => handleTrackingClick(trackingCode)}
//             style={{ cursor: "pointer" }}
//           >
//             {trackingCode}
//           </span>
//           <button onClick={() => handleRemoveTrackingCode(trackingCode)}>
//             Remover
//           </button>
//         </li>
//       ))}
//     </ul>
//   ) : (
//     <p>Nenhum rastreamento encontrado.</p>
//   )}
// </div>
