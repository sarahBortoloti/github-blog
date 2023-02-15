import * as Styled from './styles';
import { CardHeaderProps } from './types';

export const CardHeader = ({ children }: CardHeaderProps) => {
  return <Styled.Card>{children}</Styled.Card>;
};
