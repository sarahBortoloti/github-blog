import { Post } from "./components/Post"
import { Profile } from "./components/Profile"
import { Container, Content } from "./styles"

export const CardPage = () => {
  return (
    <Container>
      <Content>
        {/* <Profile /> */}
        <Post />
      </Content>
    </Container>
  )
}
