import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    setIsVisible(true);
  }, []);

  return (
    <section 
      id="home" 
      className="pt-24 lg:pt-32 pb-16 lg:pb-24 relative overflow-hidden bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div 
            className={`transition-all duration-1000 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white">
              Innovative solutions for the 
              <span className="text-blue-600 dark:text-blue-400"> digital age</span>
            </h1>
            <p className="mt-6 text-xl text-gray-600 dark:text-gray-300">
              We help businesses transform and grow in the rapidly evolving digital landscape with cutting-edge technology solutions.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="#services"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors shadow-lg hover:shadow-xl"
              >
                Our Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-base font-medium rounded-md text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors shadow hover:shadow-md"
              >
                Contact Us
              </a>
            </div>
          </div>
          <div 
            className={`relative transition-all duration-1000 delay-300 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <div className="aspect-w-5 aspect-h-3 bg-blue-100 dark:bg-blue-900 rounded-xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Team collaboration" 
                className="object-cover h-full w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/30 to-transparent"></div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-teal-500 rounded-lg dark:bg-teal-400 opacity-30 blur-2xl"></div>
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-blue-500 rounded-full dark:bg-blue-400 opacity-20 blur-3xl"></div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-gray-900 to-transparent"></div>
    </section>
  );
};

export default Hero;