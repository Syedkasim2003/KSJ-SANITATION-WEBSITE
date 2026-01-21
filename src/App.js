import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './index.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import ServicesSection from './sections/ServicesSection';
import ProjectsSection from './sections/ProjectsSection';
import FounderSection from './sections/FounderSection';
import TestimonialsSection from './sections/TestimonialsSection';
import QuoteSection from './sections/QuoteSection';
import WhatsAppButton from './components/WhatsAppButton';

function MainLayout() {
  return (
    <div className="font-sans bg-white text-dark">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
        <FounderSection />
        <TestimonialsSection />
        <QuoteSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        {/* Redirect any unknown path to the home page */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
