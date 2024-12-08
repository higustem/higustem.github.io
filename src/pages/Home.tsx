import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { Benefits } from '../components/Benefits';
import { Features } from '../components/Features';
import { HowItWorks } from '../components/HowItWorks';

export function HomePage() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <>
      <Hero />
      <Benefits />
      <Features />
      <HowItWorks />
    </>
  );
}