import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { CartProvider } from "react-use-cart";
import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage";
import DetailsPage from "./pages/DetailsPage";
import AuthorizationPage from "./pages/AuthorizationPage"
import "./App.css";
import Layout from "./components/layout";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


function App() {
  return (
      <Router>
        <CartProvider>
        <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="venues" element={<HomePage />} />
          <Route path="venues/:id" element={<DetailsPage />} />
          <Route path="auth" element={<AuthorizationPage/>} />
        </Route>
      </Routes>
        </CartProvider>
      </Router>
  );
}

export default App;
