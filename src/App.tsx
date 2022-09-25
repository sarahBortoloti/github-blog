import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import { Router } from "./routes";
import { UserProvider } from "./context";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <UserProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
