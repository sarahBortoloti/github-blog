import { CardHeader } from '../CardHeader';
import * as Styled from './styles';

type PageProps = {
  cardContent: React.ReactNode;
  children: React.ReactNode;
};
export const Page = ({ cardContent, children }: PageProps) => {
  return (
    <Styled.Wrapper>
      <Styled.Banner />

      <Styled.Container>
        <CardHeader>{cardContent}</CardHeader>
        <Styled.MainContent>{children}</Styled.MainContent>
      </Styled.Container>
    </Styled.Wrapper>
  );
};
