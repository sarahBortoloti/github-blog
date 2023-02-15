import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  gap: 24px;

  width: 100%;
  max-width: 864px;
  padding: 32px 40px;

  background-color: ${({ theme }) => theme.colors.base.profile};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
`;
