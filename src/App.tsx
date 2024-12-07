import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Benefits } from './components/Benefits';
import { Features } from './components/Features';
import { HowItWorks } from './components/HowItWorks';
import { Footer } from './components/Footer';
import { Terms } from './components/Terms';

function App() {
  const path = window.location.pathname;

  if (path === '/terms') {
    return <Terms />;
  }

  return (
    <div className="min-h-screen pt-16">
      <Navbar />
      <main>
        <Hero />
        <Benefits />
        <Features />
        <HowItWorks />
      </main>
      <Footer />
    </div>
  );
}

export default App;