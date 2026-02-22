
import React from 'react';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedProject from './components/FeaturedProject';
import Services from './components/Services';
import Values from './components/Values';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark text-white selection:bg-orange-500 selection:text-white overflow-x-hidden pt-[33px] md:pt-[37px]">
      <TopBar />
      <Header />
      <main>
        <Hero />
        <FeaturedProject />
        <Services />
        <Values />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default App;
