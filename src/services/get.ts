import { PATHS } from './../constants/endpoints';
import { httpClient } from "../lib/axios"

export const getUserInfo = (userName: string) => httpClient.get(PATHS.USER(userName)).then((res) => res.data);

export const getRepoIssues = (text: string, userName: string, repo: string) => {
  return httpClient.get(PATHS.SEARCH_API(text, userName, repo)).then((res) => res.data);
}

export const getIssueDetails = (userName: string, repo: string, issueNumber: number) => {
  return httpClient.get(PATHS.ISSUE_DETAIL(userName, repo, issueNumber)).then((res) => res.data);
}
