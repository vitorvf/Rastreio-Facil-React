import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ExternalLink } from "../../components/ExternalLink";
import {
  DivTest,
  HistoryContainer,
  HistoryList,
  ImgDelete,
  ParafragoNaoEncontrado,
  Status,
} from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import imgpackage from "../../assets/Results/img-package.png";
import imgdelete from "../../assets/Results/delete.svg";

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
                  <th>
                    Clique em seu código para ser redirecionado à sua encomenda.
                  </th>
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
                      className={
                        index === trackingHistory.length - 1 ? "last-td" : ""
                      }
                    >
                      <img src={imgpackage} alt="imgpackage" />
                      <span>{trackingCode}</span>
                      <ImgDelete
                        onClick={(event) => {
                          event.stopPropagation();
                          handleRemoveTrackingCode(trackingCode);
                        }}
                        src={imgdelete}
                        alt="Deletar"
                      />
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
          <ParafragoNaoEncontrado>
            Nenhum rastreamento encontrado.
          </ParafragoNaoEncontrado>
        )}
      </HistoryContainer>
    </DivTest>
  );
}
