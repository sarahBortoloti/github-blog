import styled from "styled-components";

export const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  height: 20px;
  gap: 8px;

  a {
    all: unset;
    color: ${({ theme }) => theme.colors.blue};
    cursor: pointer;
    font-weight: 700;
    line-height: 160%;
    text-transform: uppercase;
  }

  svg {
    align-self: baseline;
  }

`;