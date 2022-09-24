import { Link } from "../../../Link";
import {
  ArrowSquareUpRight,
  CalendarBlank,
  CaretLeft,
  ChatCircle,
  GitlabLogo,
} from "phosphor-react";
import { GitHubInfo } from "../Profile/styles";
import { InfoPost, Wrapper, LinkContainer } from "./styles";

export const Post = () => {
  const links = [
    { linkText: "Voltar", iconRight: <CaretLeft size={16} color="#3294F8" /> },
    {
      linkText: "Ver no GitHub",
      iconLeft: <ArrowSquareUpRight size={16} color="#3294F8" />,
    },
  ];

  return (
    <Wrapper>
      <LinkContainer>
        {links.map((link) => {
          return (
            <Link
              key={link.linkText}
              linkText={link.linkText}
              iconLeft={link.iconLeft}
              iconRight={link.iconRight}
            />
          );
        })}
      </LinkContainer>
      <InfoPost>
        <h3>JavaScript data types and data structures</h3>
        <GitHubInfo>
          <div>
            <GitlabLogo size={16} />
            <span>cameronwll</span>
          </div>
          <div>
            <CalendarBlank size={16} />
            <span>Há um dia</span>
          </div>

          <div>
            <ChatCircle size={16} />
            <span>Comentários</span>
          </div>
        </GitHubInfo>
      </InfoPost>
    </Wrapper>
  );
};
