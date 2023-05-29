import { HeaderContainer } from "./styles";
import logoSrc from "../../assets/branco.webp";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <HeaderContainer>
      <Link to={"/"}>
        <img
          src={logoSrc}
          alt="logo"
          style={{ width: "174px", height: "87px" }}
        />
      </Link>
    </HeaderContainer>
  );
}
