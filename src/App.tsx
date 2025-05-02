import React, { useState, useEffect, lazy, Suspense } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Loader from './components/Loader';
import { ThemeProvider } from './context/ThemeContext';

// Lazy load components for better performance
const Features = lazy(() => import('./components/Features'));
const Services = lazy(() => import('./components/Services'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const Contact = lazy(() => import('./components/Contact'));

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="min-h-screen flex flex-col">
          <Navigation />
          <main className="flex-grow">
            <Hero />
            <Suspense fallback={<div className="h-96 flex items-center justify-center"><Loader /></div>}>
              <Features />
              <Services />
              <Testimonials />
              <Contact />
            </Suspense>
          </main>
          <Footer />
        </div>
      )}
    </ThemeProvider>
  );
}

export default App;