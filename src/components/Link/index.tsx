import { ReactNode } from "react";
import { LinkContainer } from "./styles"

type LinkProps = {
  linkText: string;
  iconRight?: ReactNode,
  iconLeft?: ReactNode,
  link?: string,
  externalLink?: string;
}

export const Link = ({ linkText, iconRight, iconLeft, link, externalLink }: LinkProps) => {
  const linkValue = externalLink || link;

  const targetValue = externalLink && '_blank';

  return (
    <LinkContainer>
      {iconRight && iconRight}
      {linkValue && <a href={linkValue} target={targetValue} rel="noopener noreferrer">{linkText}</a>}
      {iconLeft && iconLeft}
    </LinkContainer>
  )
}