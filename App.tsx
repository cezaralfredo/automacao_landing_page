
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import VideoSection from './components/VideoSection';
import HowItWorks from './components/HowItWorks';
import Benefits from './components/Benefits';
import Faq from './components/Faq';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <VideoSection />
        <HowItWorks />
        <Benefits />
        <Faq />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
