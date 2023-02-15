import { User } from "./user";

export type Issue = {
  body: string;
  updated_at: string;
  title: string;
  comments: number;
  login: Pick<User, 'login'>;
  number: number;
}

export type IssueList = {
  total_count: number;
  items: Issue[];
}