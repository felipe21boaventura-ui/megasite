
import React from 'react';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Values from './components/Values';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark text-white selection:bg-orange-500 selection:text-white overflow-x-hidden">
      <TopBar />
      <Header />
      <main>
        <Hero />
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
