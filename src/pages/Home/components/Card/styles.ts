import styled from "styled-components";

export const Card = styled.aside`
  max-width: 416px;
  width: 100%;
  background-color: ${({ theme }) => theme.base.post};
  border-radius: 10px;
  padding: 32px;

  section {
    margin-top: 8px;
  }
`;

export const CardHeader = styled.header`
  display: grid;
  grid-template-areas: "title time";

  grid-template-columns: 1fr auto;
  align-items: baseline;
  column-gap: 48px;

  h5 {
    font-size: 20px;
    font-weight: 700;
    line-height: 32px;
    margin: 0;
    grid-area: title;
  }

  span {
    font-size: 14px;
    grid-area: time;
  }

  @media screen and (max-width: 576px) {
    column-gap: 8px;
  }
`;
