import { CardView } from "./components/Card"
import { LabelContainer, SectionContainer, Wrapper } from "./styles"

export const Home = () => {

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
        <CardView />
        <CardView />
        <CardView />
        <CardView />
        <CardView />
        <CardView />
      </SectionContainer>
    </Wrapper>
  )
}