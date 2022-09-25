import { Link } from "../../../Link";
import { ArrowSquareUpRight, GitlabLogo, MapPin, Users } from "phosphor-react";
import { GitHubInfo, InfoProfile, Picture } from "./styles";
import { UserContext } from "../../../../context";
import { useContext } from "react";

export const Profile = () => {
  const { userInfo } = useContext(UserContext);
  const { name, bio, login, avatar_url, company, followers, html_url } = userInfo;

  return (
    <>
      <Picture src={avatar_url} alt="" />
      <InfoProfile>
        <h3>{name}</h3>
        <span>{bio}</span>
        <GitHubInfo>
          <div>
            <GitlabLogo size={16} />
            <span>{login}</span>
          </div>
          <div>
            <MapPin size={16} />
            <span>{company}</span>
          </div>

          <div>
            <Users size={16} />
            <span>{followers} seguidores</span>
          </div>
        </GitHubInfo>
      </InfoProfile>

      <Link
        linkText="Github"
        externalLink={html_url}
        iconLeft={<ArrowSquareUpRight size={16} color="#3294F8" />}
      />
    </>
  );
};
