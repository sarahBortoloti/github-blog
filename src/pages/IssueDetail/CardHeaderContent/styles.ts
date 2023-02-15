import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 112px;
  justify-content: space-around;

  flex-direction: column;
`;

export const ContainerLinks = styled.div`
  display: flex;
  justify-content: space-between;
  height: 20px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  h3 {
    font-weight: 700;
    font-size: 24px;
    line-height: 130%;
    color: ${({ theme }) => theme.colors.base.title};
  }
`;

export const IconsInfoContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 50%;

  span {
    display: flex;
    gap: 8px;
    align-items: center;
  }
`;
