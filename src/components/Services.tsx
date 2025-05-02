import React, { useState, useRef, useEffect } from 'react';
import { Code, PenTool, LineChart, Monitor } from 'lucide-react';

interface ServiceProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const Service: React.FC<ServiceProps> = ({ icon, title, description, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const serviceRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, index * 100);
        }
      },
      { threshold: 0.1 }
    );

    if (serviceRef.current) {
      observer.observe(serviceRef.current);
    }

    return () => {
      if (serviceRef.current) {
        observer.unobserve(serviceRef.current);
      }
    };
  }, [index]);

  return (
    <div
      ref={serviceRef}
      className={`relative overflow-hidden rounded-xl transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`h-full bg-white dark:bg-gray-800 p-8 shadow-lg transition-all duration-300 ${
          isHovered ? 'transform scale-[1.02]' : ''
        }`}
      >
        <div
          className={`w-14 h-14 flex items-center justify-center rounded-lg mb-5 transition-all duration-300 ${
            isHovered
              ? 'bg-blue-600 text-white'
              : 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400'
          }`}
        >
          {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300">{description}</p>
        <div
          className={`mt-6 inline-block font-medium text-blue-600 dark:text-blue-400 transition-all duration-300 ${
            isHovered ? 'translate-x-2' : ''
          }`}
        >
          Learn more →
        </div>
      </div>
      <div
        className={`absolute bottom-0 left-0 right-0 h-1 bg-blue-600 dark:bg-blue-500 transition-all duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
      ></div>
    </div>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      icon: <Code size={28} />,
      title: 'Web Development',
      description:
        'Custom websites and web applications built with modern technologies for optimal user experience and performance.',
    },
    {
      icon: <Monitor size={28} />,
      title: 'UI/UX Design',
      description:
        'User-centered design solutions that create intuitive, accessible, and engaging digital experiences.',
    },
    {
      icon: <LineChart size={28} />,
      title: 'Digital Marketing',
      description:
        'Data-driven marketing strategies to increase visibility, drive traffic, and convert visitors into customers.',
    },
    {
      icon: <PenTool size={28} />,
      title: 'Brand Identity',
      description:
        'Comprehensive branding services to establish a strong, memorable presence in your industry.',
    },
  ];

  return (
    <section id="services" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-16">
          <p className="text-base font-semibold tracking-wide uppercase text-blue-600 dark:text-blue-400">
            Our Services
          </p>
          <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Solutions that drive success
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 dark:text-gray-300 lg:mx-auto">
            We offer a comprehensive range of services to help you achieve your business goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Service key={index} {...service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;