import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Page Imports
import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import Certification from './pages/Certification';
import Contact from './pages/Contact';
import Enroll from './pages/Enroll';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-bg-primary text-text-main antialiased selection:bg-primary/30 selection:text-secondary">
        
        {/* Navigation Glass Header */}
        <Navbar />

        {/* Main Routes Area */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/certification" element={<Certification />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/enroll" element={<Enroll />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        {/* Footer Area */}
        <Footer />
      </div>
    </Router>
  );
}
