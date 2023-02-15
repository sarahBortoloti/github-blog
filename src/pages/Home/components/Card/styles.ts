import styled from 'styled-components';

export const Card = styled.div`
  width: 100%;
  max-width: 416px;
  height: auto;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.base.post};
  display: flex;
  flex-direction: column;
  padding: 32px;

  cursor: pointer;

  margin-top: 48px;
  margin-bottom: 32px;

  &:hover {
    outline: 0;
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.base.border}  ;
  },
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;

  margin-top: 16px;
  margin-bottom: 16px;

  h6 {
    font-weight: 700;
    font-size: 20px;
    line-height: 160%;
    max-width: 260px;
    color: ${({ theme }) => theme.colors.base.title};
  }

  span {
    font-size: 14px;
  }
`;

export const IntroText = styled.div`
  display: -webkit-box;
  max-width: 400px;
  overflow: hidden;

  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  text-overflow: ellipsis;

  font-weight: 400;
  font-size: 16px;
  line-height: 160%;
  color: ${({ theme }) => theme.colors.base.text};
`;
