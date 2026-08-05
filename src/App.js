import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import T from "./lib/tokens";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import WorkPage from "./pages/WorkPage";
import WritingPage from "./pages/WritingPage";
import ResearchPage from "./pages/ResearchPage";
import AboutPage from "./pages/AboutPage";

export default function App() {
  return (
    <Router>
      <div style={{ background: T.bg, minHeight: "100vh" }}>
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/work" element={<WorkPage />} />
            <Route path="/research" element={<ResearchPage />} />
            <Route path="/writing" element={<WritingPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
