import { httpClient } from './../lib/axios';

export const PostIssueBody = (body: string) => {
  return httpClient
    .post('/markdown', {
      text: body,
    })
    .then((res) => res.data);
};
