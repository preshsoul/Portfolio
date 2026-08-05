import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import T from "./lib/tokens";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import WorkPage from "./pages/WorkPage";
import WritingPage from "./pages/WritingPage";
import ProductsPage from "./pages/ProductsPage";
import AboutPage from "./pages/AboutPage";
import ConnectPage from "./pages/ConnectPage";

export default function App() {
  return (
    <Router>
      <div style={{ background: T.bg, minHeight: "100vh" }}>
        <style>{`
          * { margin: 0; padding: 0; box-sizing: border-box; }
          html { scroll-behavior: smooth; }
          body { background: ${T.bg}; -webkit-font-smoothing: antialiased; }
          ::selection { background: ${T.accentLight}; color: ${T.text}; }
          input:focus, textarea:focus, select:focus { border-color: ${T.accent} !important; }
        `}</style>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/writing" element={<WritingPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/connect" element={<ConnectPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
