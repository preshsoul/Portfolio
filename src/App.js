import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import T from "./lib/tokens";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import PageProgress from "./components/PageProgress";
import ScrollToTop from "./components/ScrollToTop";
import HomePage from "./pages/HomePage";
import WorkPage from "./pages/WorkPage";
import WritingPage from "./pages/WritingPage";
import ResearchPage from "./pages/ResearchPage";
import AboutPage from "./pages/AboutPage";
import ConnectPage from "./pages/ConnectPage";
import CaseStudyPage from "./pages/CaseStudyPage";

export default function App() {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <div style={{ background: T.bg, minHeight: "100vh" }}>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <ScrollToTop />
        <PageProgress />
        <Navigation />
        <PageRoutes />
        <Footer />
      </div>
    </Router>
  );
}

function PageRoutes() {
  const location = useLocation();

  return (
    <main id="main-content" className="page-stage" key={location.pathname}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/work/:slug" element={<CaseStudyPage />} />
        <Route path="/research" element={<ResearchPage />} />
        <Route path="/writing" element={<WritingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/connect" element={<ConnectPage />} />
      </Routes>
    </main>
  );
}
