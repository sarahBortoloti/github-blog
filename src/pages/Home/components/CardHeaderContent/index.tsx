import { FollowersSvg, UsernameSvg } from "../../../../assets";
import { ArrowSvg } from "../../../../assets/arrow";
import { CompanySvg } from "../../../../assets/company";
import { Link } from "../../../../components";
import { User } from "../../../../types/user";
import * as Styled from './styles';

type CardHeaderContent = {
  userInfo: User | undefined,
}
export const CardHeaderContent = ({userInfo}: CardHeaderContent) => {

  return (
    <>
    <img src={userInfo?.avatar_url} alt="" width={148} height={148} />
    <Styled.ContainerCardHeader>
      <h3>{userInfo?.login}</h3>
      <p>
        {userInfo?.bio}
      </p>
      <Styled.IconsInfoContainer>
        <span>
          <UsernameSvg width={16} height={16} /> {userInfo?.login}
        </span>
        <span>
          <CompanySvg width={16} height={16} /> {userInfo?.company}
        </span>
        <span>
          <FollowersSvg width={16} height={16} /> {userInfo?.followers} seguidores
        </span>
      </Styled.IconsInfoContainer>
    </Styled.ContainerCardHeader>
    <Link externalLink={`https://github.com/${userInfo?.login}`} linkText="Github" iconLeft={<ArrowSvg />} />
  </>
  )
}