import styled from "styled-components";

export const HeaderResults = styled.header`
  border-bottom: 1px solid rgb(227, 227, 230);
  padding: 10px 30px;
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr 1fr;
  background: white;

  h3 {
    font-size: 0.9rem;
    font-weight: 500;
    color: #333333;
  }
`;

export const Card = styled.div`
  h2 {
    font-size: 1.5rem;
    font-weight: 500;
    margin-bottom: 5rem;
    text-align: center;
    color: black;
  }

  ul {
    margin: 0px auto;
    width: 100%;
    background: var(--full-white);
    border-radius: 8px;
    overflow-y: auto;
    max-height: 45rem;
    box-shadow: var(--primary-shadow);
  }

  li {
    background: rgb(17, 33, 49);
    padding: 20px 30px;
    display: grid;
    gap: 20px;
    -webkit-box-align: center;
    align-items: center;
    grid-template-columns: 1fr 1fr;
    color: var(--gray-light);

    &:nth-child(2n) {
      background-color: rgb(7 20 34);
    }
  }

  p {
    margin: 3px 5px 0px 0px;

    font-size: 0.8rem;
    color: var(--gray-light);
  }

  h5 {
    font-weight: 500;
    font-size: 0.9rem;
    color: var(--gray-light);
  }

  .h5-left {
    font-weight: 400;
    font-size: 0.9rem;
    color: var(--gray-light);
  }

  .p-time {
    display: flex;
  }
`;

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
    /* margin-bottom: 10px; */
    margin-bottom: 15px;
  }

  .item-rastreio:first-child {
    border-left: 4px solid #ffd400;
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

  //Segundo Style Rastreios
  /* .milestones {
    list-style-type: none;
    padding-left: 14.5px;
  }
  ol,
  ul {
    margin-top: 0;
    margin-bottom: 10px;
  }

  .milestones > li {
    border-bottom: 0;
    border-left: 3px solid #e6e6e6;
    margin-left: 60px;
    padding-top: 15px;
    padding-bottom: 15px;
    padding-left: 25px;
    min-height: 50px;
  }

  .milestones > li > img:first-child {
    margin-left: -50px;
    margin-top: -5px;
    float: left;
    position: relative;
    border-radius: 14.5px;
    padding: 7.5px;
    font-size: 12px;
    min-width: 29px;
    width: 48px;
  }

  .milestones > li > .out {
    float: left;
    width: 50px;
    margin-left: -100px;
    font-size: 10px;
    margin-top: 7px;
  }

  .milestones > li > .out,
  .milestones > li > img:first-child {
    text-align: center;
  }

  .milestones > li > strong {
    font-weight: 500;
    color: #6eaf2c;
    font-size: 20px;
  }

  .milestones > li > small {
    font-size: 10px;
  } */
`;

export const LiResults = styled.ul``;

// export const LinhaDotted = styled.div`
//   height: 100%;
//   position: absolute;
//   top: 0px;
//   left: 108px;
//   border-left: 1px dashed;
//   border-left-width: 2px;
//   border-color: #dfdfdf;

//   span {
//     border: 1px solid red;
//   }

//   & span {
//   }
// `;

// export const IconeRastreio = styled.span`
// .item-rastreio, .icone-rastreio {
//     display: flex;
//     align-items: center;
// }
// .item-rastreio, .icone-rastreio {
//     z-index: 100;
// }
// `;

// export const DataItem = styled.span`
//   font-size: 12px;
//   line-height: 1.2;
//   text-align: center;
//   font-weight: 500;
//   color: #585555;
//   min-width: 96px;
//   max-width: 96px;

//   span {
//     display: block;
//   }
// `;

// export const IconeRastreio = styled.span`
//   display: block;
//   z-index: 100;
// `;

// export const Status = styled.div`
//   font-size: 15px;
//   font-weight: bold;
//   color: #3b3f51;
// `;
