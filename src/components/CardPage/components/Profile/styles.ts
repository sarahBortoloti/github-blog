import styled from "styled-components";


export const Picture = styled.img`
  width: 100%;
  max-width: 148px;
  height: 148px;
`;

export const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  height: 20px;
  gap: 8px;

  a {
    all: unset;
    color: ${({ theme }) => theme.blue};
    cursor: pointer;
    font-weight: 700;
    line-height: 160%;
  }
`;

export const InfoProfile = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  margin-left: 32px;

  h3 {
    font-size: 24px;
    font-weight: bold;
    line-height: 130%;
  }

  span {
    font-weight: 400;
    font-size: 16px;
    line-height: 160%;
    color: ${({ theme }) => theme.base.text};
  }
`;

export const GitHubInfo = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 24px;

  div {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 4px;
    color: ${({ theme }) => theme.base.text};
  }
`;
