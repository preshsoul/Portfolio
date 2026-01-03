import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import BlogSection from './components/BlogSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import BlogPage from './pages/BlogPage'; // New Page for all articles
import PostDetail from './pages/PostDetail';
import ProjectDetail from './pages/ProjectDetail'; 
import ChatWidget from './components/ChatWidget';

// Main Portfolio Page Component (The Landing Page)
const MainPortfolio = ({ scrollToSection }) => {
  return (
    <main>
      <HeroSection scrollToSection={scrollToSection} />
      <AboutSection />
      <ServicesSection scrollToSection={scrollToSection} />
      {/* This component likely shows the "Latest 3" posts */}
      <BlogSection />
      <ContactSection />
    </main>
  );
};

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId) => {
    if (window.location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 80;
      const elementPosition = element.offsetTop - navbarHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navigation
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          activeSection={activeSection}
          scrollToSection={scrollToSection}
        />

        <Routes>
          {/* 1. Landing Page Route */}
          <Route 
            path="/" 
            element={<MainPortfolio scrollToSection={scrollToSection} />} 
          />

          {/* 2. New: Full Blog Listing Page (Great for SEO) */}
          <Route 
            path="/blog" 
            element={<BlogPage />} 
          />
          
          {/* 3. Individual Blog Article Route */}
          <Route 
            path="/blog/:slug" 
            element={<PostDetail />} 
          />

          {/* 4. Individual Case Study/Project Route */}
          <Route 
            path="/portfolio/:slug" 
            element={<ProjectDetail />} 
          />
        </Routes>

        <Footer />
        <ChatWidget />
      </div>
    </Router>
  );
};

export default Portfolio;