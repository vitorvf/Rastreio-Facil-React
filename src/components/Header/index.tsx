import { HeaderContainer } from "./styles";
import logoSrc from "../../assets/branco.webp";

export function Header() {
  return (
    <HeaderContainer>
      <img
        src={logoSrc}
        alt="logo"
        style={{ width: "174px", height: "87px" }}
      />
    </HeaderContainer>
  );
}
