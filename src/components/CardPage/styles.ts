import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: -80px;
`;

export const Content = styled.div`
  display: flex;

  background-color: ${({ theme }) => theme.base.profile};
  max-width: 864px;
  width: 100%;
  padding: 32px 40px;
`;
