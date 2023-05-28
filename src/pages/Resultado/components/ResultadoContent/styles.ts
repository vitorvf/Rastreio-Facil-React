import styled from "styled-components";

export const PostContentContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2.5rem 2rem;
  margin-bottom: 8rem;
  background: white;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  margin-top: 4rem;
  border-radius: 10px;

  img {
    width: 100%;
  }

  h1,
  h2,
  h3 {
    color: ${({ theme }) => theme.colors["brand-blue"]};
  }

  ul {
    list-style: inherit;
    padding-left: 1.5rem;
  }

  pre {
    background: ${({ theme }) => theme.colors["base-post"]};
    padding: 1rem;

    > div {
      background: none !important;
      padding: 0 !important;
      margin: 0 !important;

      code {
        font-family: "FiraCode", monospace !important;
        line-height: 160% !important;
      }
    }
  }
`;

export const DivResults = styled.div`
  .conteudo {
    color: #fdbe49;
    font-size: 14px;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
  }
  .conteudo {
    max-width: 850px;
    margin: 0 auto;
  }
  .conteudo {
    max-width: 1090px !important;
  }

  .conteudo ul {
    color: #222121;
    font-size: 15px;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    line-height: 25px;
    width: 93.33333333333333%;
    list-style-position: inside;
    list-style-type: lower-alpha;
    margin: 0 auto;
    padding: 0;
  }

  ul li {
    margin-bottom: 15px;
  }

  .item-rastreio:first-child {
    border-left: 4px solid ${({ theme }) => theme.colors["green-sucesso"]};
  }
  .item-rastreio,
  .icone-rastreio {
    display: flex;
    align-items: center;
  }
  .item-rastreio,
  .icone-rastreio {
    z-index: 100;
  }
  .item-rastreio {
    position: relative;
    border-left: 4px solid #fff;
  }

  ul li div {
    text-align: center;
    margin: 15px 0;
  }

  .linha-dotted {
    height: 100%;
    position: absolute;
    top: 0px;
    left: 108px;
    border-left: 1px dashed;
    border-left-width: 2px;
    border-color: #dfdfdf;
  }

  .item-rastreio span {
    display: block;
  }

  .data-item {
    font-size: 12px;
    line-height: 1.2;
    text-align: center;
    font-weight: 500;
    color: #585555;
    min-width: 96px;
    max-width: 96px;
  }

  .item-rastreio span {
    display: block;
  }

  .item-rastreio,
  .icone-rastreio {
    display: flex;
    align-items: center;
  }
  .item-rastreio,
  .icone-rastreio {
    z-index: 100;
  }

  #conteudo p:last-of-type {
    margin-bottom: 0;
  }
  .conteudo p {
    color: #666;
    font-size: 16px;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    line-height: 20px;
  }
  .item-rastreio > p {
    margin-left: 12px;
    margin-top: 7px;
  }

  .item-rastreio .status {
    font-size: 15px;
    font-weight: bold;
    color: #3b3f51;
  }
  .item-rastreio .status {
    color: #3b3f51;
  }
  .item-rastreio span {
    display: block;
  }

  .item-rastreio .local {
    font-size: 13px;
  }

  .item-rastreio span {
    display: block;
  }

  .icone-rastreio img {
    background: #fff;
  }

  @media (max-width: 480px) {
    .icone-rastreio img {
      height: 26px;
      width: 26px;
    }

    .linha-dotted {
      top: 24px;
    }
  }
`;

export const ImgLocation = styled.img`
  width: 1rem !important;
  height: 1rem;
  margin-right: 5px;

  @media (max-width: 767px) {
    margin-right: 0px;
  }
`;

export const NovaConsulta = styled.a`
  button {
    padding: 11px 30px;
    color: white;
    background: #0450a0;
    border: none;
    border-radius: 6px;
    font-size: 15px;
    cursor: pointer;
    transition: all 0.3s ease 0s;
    display: block;
    margin: 15px auto 1px;

    &:hover {
      box-shadow: 0px 4px 15px rgba(137, 18, 255, 0.1);
      transform: scale(1.02);
    }
  }
`;
