import { Outlet } from "react-router-dom";
import { Header } from "../Header";
import { CardPage } from "../CardPage";

export function DefaultLayout() {
  return (
    <>
      <Header />
      <CardPage />
      <Outlet />
    </>
  )
}