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

function App() {
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
    </div>
  );
}

export default App;
