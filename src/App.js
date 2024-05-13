import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "react-use-cart";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage";
import DetailsPage from "./pages/DetailsPage";
import "./App.css";
import Layout from "./components/layout";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import StoryPage from "./pages/StoryPage";
import ClientsPage from "./pages/ClientsPage";
import ServicesPage from "./pages/ServicesPage";
import ContactsPage from "./pages/ContactsPage";
import ProfilePage from "./pages/ProfilePage";

const theme = createTheme({
  palette: {
    primary: {
      main: "#F2935C",
      dark: "#F76C1E",
      contrastText: "#fff",
    },
    secondary: {
      main: "#7E9ABF",
      dark: "#5377A6",
      contrastText: "black",
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
              <Route path="story" element={<StoryPage />} />
              <Route path="clients" element={<ClientsPage />} />
              <Route path="services" element={<ServicesPage />} />
              <Route path="contacts" element={<ContactsPage />} />
              <Route path="profile/:name" element={<ProfilePage />} />
            </Route>
          </Routes>
        </CartProvider>
      </Router>
    </ThemeProvider>
  );
}

export default App;
