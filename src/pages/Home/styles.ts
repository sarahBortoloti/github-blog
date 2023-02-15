import styled from 'styled-components';

export const FormContent = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;

  margin-top: 86px;

  input {
    width: inherit;
    background: #040f1a;

    border: 1px solid #1c2f41;
    border-radius: 6px;
    padding: 12px;
    color: white;
    margin-bottom: 16px;

    ::placeholder {
      font-weight: 400;
      font-size: 16px;
      line-height: 160%;

      color: #3a536b;
    }
  }
`;

export const LabelContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;

  label {
    color: ${({ theme }) => theme.colors.base.subtitle};
    font-size: 18px;
    font-weight: 700;
  }

  span {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.base.span};
  }
`;
