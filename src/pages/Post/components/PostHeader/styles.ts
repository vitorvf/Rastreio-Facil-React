import styled from "styled-components";

export const PostHeaderContainer = styled.section`
  width: 100%;
  min-height: 10.5rem;
  margin-top: -5.5rem;
  /* background: ${({ theme }) => theme.colors["base-profile"]}; */
  background: ${({ theme }) => theme.colors["base-white"]};

  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 2rem; //conferir
  display: flex;
  flex-direction: column;

  header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1.25rem;
  }

  h1 {
    font-size: ${({ theme }) => theme.textSizes["title-title-l"]};
    color: ${({ theme }) => theme.colors["base-title"]};
    line-height: 130%;
    margin-bottom: 0.5rem;
  }

  ul {
    display: flex;
    align-items: center;
    gap: 2rem;
    flex-wrap: wrap;

    li {
      gap: 0.5rem;
      display: flex;
      align-items: center;
      color: ${({ theme }) => theme.colors["base-span"]};
      line-height: 0px;

      svg {
        color: ${({ theme }) => theme.colors["base-label"]};
      }
    }
  }
`;

export const DivHeader = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  /* margin: 80px auto; */ //Para alterar o tamanho da Div do Header de Results
  max-width: 870px;
  overflow: hidden;
`;

export const SecondDiv = styled.div`
  -webkit-box-align: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: justify;
  justify-content: space-between;
  min-height: 86px;
  position: relative;

  img {
    background-image: url("https://rastreiovf.netlify.app/images/postado-verde.png");
    /* Outras propriedades de estilo */
    width: 500px;
    height: 300px;
    display: block;
    height: 40px;
    position: relative;
    width: 40px;
    z-index: 3;
    background-size: contain;
  }

  span {
    color: rgb(59, 63, 81);
    font-size: 14px;
  }

  h5 {
    font-size: 0.9rem;
  }
`;

export const Linha = styled.span`
  text-align: center;
  display: block;
  height: 2px;
  left: 115px;
  position: absolute;
  top: 25%;
  transform: translateY(-50%);
  width: 206px;
  z-index: 2;
  background-color: rgb(200, 205, 218);
`;

export const ImgSpan = styled.span`
  background-image: url("https://rastreiovf.netlify.app/images/postado-cinza.png");
  background-repeat: no-repeat;
  /* Outras propriedades de estilo */
  width: 500px;
  height: 300px;
  display: block;
  height: 40px;
  position: relative;
  width: 40px;
  z-index: 3;
  background-size: contain;
`;

export const ImgSpan2 = styled.span`
  background-image: url("https://rastreiovf.netlify.app/images/encaminhado-cinza.png");
  background-repeat: no-repeat;
  /* Outras propriedades de estilo */
  width: 500px;
  height: 300px;
  display: block;
  height: 40px;
  position: relative;
  width: 40px;
  z-index: 3;
  background-size: contain;
`;

export const ImgSpan3 = styled.span`
  background-image: url("https://rastreiovf.netlify.app/images/saiu-cinza.png");
  /* Outras propriedades de estilo */
  width: 500px;
  height: 300px;
  display: block;
  height: 40px;
  position: relative;
  width: 40px;
  z-index: 3;
  background-size: contain;
`;

export const ImgSpan4 = styled.span`
  background-image: url("https://rastreiovf.netlify.app/images/entregue-cinza.png");
  /* Outras propriedades de estilo */
  width: 500px;
  height: 300px;
  display: block;
  height: 40px;
  position: relative;
  width: 40px;
  z-index: 3;
  background-size: contain;
`;

export const TextoSpan = styled.div`
  text-align: center;
`;
