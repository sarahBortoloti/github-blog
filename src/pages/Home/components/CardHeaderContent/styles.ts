import styled from 'styled-components';

export const ContainerCardHeader = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: space-around;

  h3 {
    font-weight: 700;
    font-size: 24px;
    line-height: 130%;
  }

  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 160%;
    color: ${({ theme }) => theme.colors.base.text};
  }
`;

export const IconsInfoContainer = styled.div`
  display: flex;
  gap: 24px;

  span {
    display: flex;
    gap: 8px;
    align-items: center;
  }
`;
