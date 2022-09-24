import { Header } from "./components/Header";
import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "./styles/global"
import { defaultTheme } from "./styles/themes/default"
import { CardPage } from "./components/CardPage";
import { Home } from "./pages/Home";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Header />
      <CardPage />
      <Home />
    </ThemeProvider>
  )
}

export default App
