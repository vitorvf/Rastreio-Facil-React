import { HeaderContainer } from "./styles";
import logoSrc from "../../assets/branco.webp";

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoSrc} alt="logo" />
    </HeaderContainer>
  );
}
