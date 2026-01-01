import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import BlogSection from './components/BlogSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import PostDetail from './pages/PostDetail';
import ProjectDetail from './pages/ProjectDetail'; // New Page Import
import ChatWidget from './components/ChatWidget';

// Main Portfolio Page Component
const MainPortfolio = ({ scrollToSection }) => {
  return (
    <main>
      <HeroSection scrollToSection={scrollToSection} />
      <AboutSection />
      <ServicesSection scrollToSection={scrollToSection} />
      <BlogSection />
      <ContactSection />
    </main>
  );
};

// Main App Component
const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId) => {
    // If we're on a blog post or project page, navigate to home first
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
          {/* Landing Page Route */}
          <Route 
            path="/" 
            element={<MainPortfolio scrollToSection={scrollToSection} />} 
          />
          
          {/* Individual Blog Article Route */}
          <Route 
            path="/blog/:slug" 
            element={<PostDetail />} 
          />

          {/* Individual Case Study/Project Route */}
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