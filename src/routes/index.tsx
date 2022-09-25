import { DefaultLayout } from "../components/Layout"
import { Home } from "../pages/Home"
import { Route, Routes } from "react-router-dom"

export const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<DefaultLayout />}>
        <Route path='/' element={<Home />} />
        {/* <Route path='/issues:id' element={<Checkout />} /> */}
      </Route>
    </Routes>
  )
}