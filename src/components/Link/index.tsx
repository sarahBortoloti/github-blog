import { ReactNode } from "react";
import { LinkContainer } from "./styles"

type LinkProps = {
  linkText: string;
  iconRight?: ReactNode,
  iconLeft?: ReactNode,
  link?: string,
}

export const Link = ({ linkText, iconRight, iconLeft }: LinkProps) => {

  return (
    <LinkContainer>
      {iconRight && iconRight}
      <a href="">{linkText}</a>
      {iconLeft && iconLeft}
    </LinkContainer>
  )
}