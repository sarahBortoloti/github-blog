import { useEffect, useState } from "react";
import { get } from "../../services";
import { CardView } from "./components/Card"
import { LabelContainer, SectionContainer, Wrapper } from "./styles"


type IssueProps = {
  created_at: string;
  body: string;
  title: string;
}

type ItemsIssues = {
  items: IssueProps[];
}

export const Home = () => {
  const [issues, setIssues] = useState<ItemsIssues>();
  const [search, setSearch] = useState('');

  // https://api.github.com/search/issues?q=repo:sarahBortoloti/github-blog

  // https://api.github.com/search/issues?q=javascript&repo:sarahBortoloti/github-blog


  const fetchRepoIssues = async () => {
    const response = await get('search/issues?q=repo:sarahBortoloti/github-blog');

    if (response.data) {
      setIssues(response.data as ItemsIssues);
    }
  }

  useEffect(() => {
    fetchRepoIssues();
  }, []);


  return (
    <Wrapper>
      <form action="">
        <LabelContainer>
          <label htmlFor="search">Publicações</label>
          <span>6 publicações</span>
        </LabelContainer>
        <input id="search" placeholder="Buscar conteúdo" type="text" />
      </form>
      <SectionContainer>
        {issues && issues?.items.map(({ created_at, body, title }) => {
          return <CardView key={created_at} title={title} brief={body} published_in={created_at} />
        })}

      </SectionContainer>
    </Wrapper>
  )
}