import { Post } from "./components/Post"
import { Container, Content } from "./styles"
import { useContext, useEffect } from "react";
import { get } from "../../services";
import { UserContext } from "../../context";
import { useLocation } from "react-router-dom";
import { Profile } from "./components/Profile";

type UserInfo = {
  name: string;
  login: string;
  avatar_url: string;
  company: string;
  bio: string;
  followers: number;
}

export const CardPage = () => {

  const { pathname } = useLocation();
  console.log(pathname);

  const isHomePage = pathname === "/";

  const { setUserInfo } = useContext(UserContext);

  const fetchUserInfo = async () => {
    const response = await get('users/sarahBortoloti');

    if (response.data) {
      const getUserInfo = (({ name, login, avatar_url, company, bio, followers }) => ({ name, login, avatar_url, company, bio, followers }))(response.data as UserInfo);

      setUserInfo(getUserInfo);
    }
  }

  useEffect(() => {
    fetchUserInfo();
  }, []);

  return (
    <Container>
      <Content>
        {isHomePage && <Profile />}
        {!isHomePage && <Post />}
      </Content>
    </Container>
  )
}
