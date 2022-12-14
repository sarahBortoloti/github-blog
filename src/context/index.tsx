import { createContext, ReactNode, useState } from "react";

type UserInfo = {
  name: string;
  login: string;
  avatar_url: string;
  company: string;
  bio: string;
  followers: number;
  html_url: string;
};

type UserContextType = {
  userInfo: UserInfo;
  setUserInfo: (userInfo: UserInfo) => void;
};

type UserProviderProps = {
  children: ReactNode;
};

export const UserContext = createContext({} as UserContextType);

export const UserProvider = ({ children }: UserProviderProps) => {
  const [userInfo, setUserInfo] = useState({} as UserInfo);

  return (
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </UserContext.Provider>
  );
};
