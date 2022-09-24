import styled from "styled-components";
import headerSvg from "../../assets/header_background.svg";

export const Container = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 296px;
  background: no-repeat url(${headerSvg});
  background-size: cover;

  img {
    width: 100%;
    height: 98px;
    margin-bottom: 48px;
  }
`;
