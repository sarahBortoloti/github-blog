import { useLocation } from 'react-router-dom';
import { Page } from '../../components';
import { CardHeaderContent } from './CardHeaderContent';
import { useEffect, useState } from 'react';
import { getIssueDetails } from '../../services/get';
import { PostIssueBody } from '../../services/post';

export const IssueDetail = () => {
  const location = useLocation();
  const urlParam = location.pathname.split('/')[2];
  const [issueDetail, setIssueDetail] = useState<any>();

  const [bodyIssue, setBodyIssue] = useState<any>();
  const handleGetIssueDetail = async () => {
    const repo = 'github-blog';

    const response = await getIssueDetails('sarahBortoloti', repo, +urlParam);

    if (response) {
      setIssueDetail(response);
    }
  };

  const formattingBodyIssue = async () => {
    if (issueDetail) {
      const response = await PostIssueBody(issueDetail.body);

      setBodyIssue(response);
    }
  };

  useEffect(() => {
    if (issueDetail) {
      formattingBodyIssue();
    }
  }, [issueDetail]);

  useEffect(() => {
    if (urlParam) {
      handleGetIssueDetail();
    }
  }, [urlParam]);

  return (
    <Page cardContent={<CardHeaderContent />}>
      {bodyIssue && <div dangerouslySetInnerHTML={{ __html: bodyIssue }}></div>}
    </Page>
  );
};
