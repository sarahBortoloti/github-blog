import { Container } from "./styles"
import logoSvg from "../../assets/logo.svg";
import { Profile } from "../CardPage/components/Profile";

export const Header = () => {
  return (
    <Container>
      <img src={logoSvg} alt="" />
    </Container>
  )
}