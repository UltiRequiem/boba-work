import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Portfolio from './components/Portfolio';
import Team from './components/Team';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-boba-bg text-white selection:bg-boba-secondary/30 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Pricing />
        <Portfolio />
        <Team />
        <About />
        <Contact />
      </main>
    </div>
  );
}

export default App;