import styled from "styled-components";
import headerBg from "../../assets/blue-pattern.png";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 18.5rem;
  background-image: url(${headerBg});
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    margin-bottom: 5rem;
  }
`;
