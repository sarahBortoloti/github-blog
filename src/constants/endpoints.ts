export const PATHS = {
  USER: (userName: string) =>  `users/${userName}`,
  SEARCH_API: (text: string,userName: string, repo: string) => `search/issues?q=${text}repo:${userName}/${repo}`,
  ISSUE_DETAIL: (nameGit: string, repoName: string, id: number | string) => `/repos/${nameGit}/${repoName}/issues/${id}`,
}