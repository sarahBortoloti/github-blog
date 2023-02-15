import { useNavigate } from 'react-router-dom';
import { Issue } from '../../../../types/issue';
import * as Styled from './styles';

type CardProps = {
  issue: Issue;
};

export const Card = ({ issue }: CardProps) => {
  const navigate = useNavigate();

  const goToIssueDetail = () => navigate(`/issue/${issue.number}`, { replace: true });

  return (
    <Styled.Card onClick={() => goToIssueDetail()}>
      <Styled.Header>
        <h6>{issue.title}</h6>
        <span>Há 1 dia</span>
      </Styled.Header>
      <Styled.IntroText>{issue.body}</Styled.IntroText>
    </Styled.Card>
  );
};
