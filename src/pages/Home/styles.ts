import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 72px;

  form {
    max-width: 864px;
    width: 100%;

    input {
      width: inherit;
      background: #040f1a;

      border: 1px solid #1c2f41;
      border-radius: 6px;
      padding: 12px;
      color: white;

      ::placeholder {
        font-weight: 400;
        font-size: 16px;
        line-height: 160%;

        color: #3a536b;
      }
    }
  }
`;

export const LabelContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;

  label {
    color: ${({ theme }) => theme.base.subtitle};
    font-size: 18px;
    font-weight: 700;
  }

  span {
    font-size: 14px;
    color: ${({ theme }) => theme.base.span};
  }
`;

export const SectionContainer = styled.section`
  display: flex;
  max-width: 864px;
  width: 100%;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 48px;
  gap: 32px;
`;
