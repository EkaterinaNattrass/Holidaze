import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "react-use-cart";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage";
import DetailsPage from "./pages/DetailsPage";
import AuthorizationPage from "./pages/AuthorizationPage";
import "./App.css";
import Layout from "./components/layout";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const theme = createTheme({
  palette: {
    primary: {
      main: "#F2811D",
      dark: "#F76C1E",
      contrastText: "#fff",
    },
    secondary: {
      main: "#078C8C",
      dark: "#ba000d",
      contrastText: "#000",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <CartProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<LandingPage />} />
              <Route path="venues" element={<HomePage />} />
              <Route path="venues/:id" element={<DetailsPage />} />
              <Route path="auth" element={<AuthorizationPage />} />
            </Route>
          </Routes>
        </CartProvider>
      </Router>
    </ThemeProvider>
  );
}

export default App;
