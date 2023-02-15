import { ChevronSvg, CommentSvg, UsernameSvg } from '../../../assets';
import { ArrowSvg } from '../../../assets/arrow';
import { CalendarSvg } from '../../../assets/calendar';
import { Link } from '../../../components';
import * as Styled from './styles';

export const CardHeaderContent = () => {
  return (
    <Styled.Container>
      <Styled.ContainerLinks>
        <Link link="#" linkText="voltar" iconRight={<ChevronSvg />} />
        <Link link="#" linkText="ver no github" iconLeft={<ArrowSvg />} />
      </Styled.ContainerLinks>
      <h3>JavaScript data types and data structures</h3>

      <Styled.IconsInfoContainer>
        <span>
          <UsernameSvg width={16} height={16} />dsdsdsdsdsd
        </span>
        <span>
          <CalendarSvg width={16} height={16} />sdsdssdsdsd
        </span>
        <span>
          <CommentSvg width={16} height={16} />sdsdsdsd
        </span>
      </Styled.IconsInfoContainer>
    </Styled.Container>
  );
};
