import * as Styled from './styles';

import { Card } from './components/Card';
import { Page } from '../../components/Page';
import { useEffect, useState } from 'react';
import { getRepoIssues, getUserInfo } from '../../services/get';
import { User } from '../../types/user';
import { CardHeaderContent } from './components/CardHeaderContent';
import { IssueList } from '../../types/issue';

export const Home = () => {

  const [userInfo, setUserInfo] = useState<User>();
  const [searchIssue, setSearchIssue] = useState<string>('');
  const [issues, setIssues] = useState<IssueList>();


  const handleGetUserInfo = async () => {
    const response = await getUserInfo('sarahBortoloti');
    if(response) {
      setUserInfo(response);
    }
  };

  const handleGetIssues = async () => {
    if(userInfo) {
      const {login} = userInfo;
      const repo = 'github-blog';

      const response = await getRepoIssues(searchIssue, login, repo);

      if(response) {
        setIssues(response);
      }
    }
  };

  const handleSearchIssue = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setSearchIssue(event.target.value)
  }

  useEffect(() => {
    handleGetUserInfo();
  }, []);

  useEffect(() => {
    if(searchIssue) {
      handleGetIssues();
    }
  }, [searchIssue]);

  return (
    <Page
      cardContent={
         <CardHeaderContent userInfo={userInfo} />
      }
    >
        <Styled.FormContent action="">
          <Styled.LabelContainer>
            <label htmlFor="search">Publicações</label>
            {issues?.total_count && <span> {issues?.total_count} publicações</span>}
          </Styled.LabelContainer>

          <input value={searchIssue} onChange={handleSearchIssue} type="text" />
        </Styled.FormContent>

          {issues?.items &&  issues.items.map((issue) => (
            <Card issue={issue} key={issue.updated_at} />
          ))}
    </Page>
  );
};
