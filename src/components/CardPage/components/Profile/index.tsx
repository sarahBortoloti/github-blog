import { Link } from "../../../Link";
import { ArrowSquareUpRight, GitlabLogo, MapPin, Users } from "phosphor-react";
import { GitHubInfo, InfoProfile, LinkContainer, Picture } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { prefix } from "@fortawesome/free-solid-svg-icons";


export const Profile = () => {
  return (
    <>
      <Picture src="" alt="" />
      <InfoProfile>
        <h3>Cameron Williamson</h3>
        <span>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </span>
        <GitHubInfo>
          <div>
            <GitlabLogo size={16} />
            <span>cameronwll</span>
          </div>
          <div>
            <MapPin size={16} />
            <span>Rocketseat</span>
          </div>

          <div>
            <Users size={16} />
            <span>32 seguidores</span>
          </div>
        </GitHubInfo>
      </InfoProfile>

      <Link linkText="Github" iconLeft={
        <ArrowSquareUpRight size={16} color="#3294F8" />
      } />
    </>
  );
};
