import { Issue } from "../../../../types";

export type CardProps = {
  issue: Issue;
  height: number;
};

export type CardStyleProps = Pick<CardProps, 'height'>;
