import React, { useState, useEffect, useRef } from 'react';

interface Testimonial {
  content: string;
  author: string;
  role: string;
  image: string;
}

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const testimonials: Testimonial[] = [
    {
      content:
        "NovaTech transformed our online presence completely. Their team delivered a beautiful, responsive website that has significantly increased our conversion rates. I couldn't be happier with the results.",
      author: 'Sarah Johnson',
      role: 'CEO at GreenLeaf',
      image: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=256',
    },
    {
      content:
        "Working with NovaTech has been a game-changer for our business. Their attention to detail and technical expertise helped us launch our e-commerce platform in record time.",
      author: 'Michael Chen',
      role: 'Founder of TechSprint',
      image: 'https://images.pexels.com/photos/3777946/pexels-photo-3777946.jpeg?auto=compress&cs=tinysrgb&w=256',
    },
    {
      content:
        "The team at NovaTech consistently delivers high-quality work. Their redesign of our website improved user engagement by 40% and helped us establish a strong brand identity.",
      author: 'Emily Rodriguez',
      role: 'Marketing Director at BlueWave',
      image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=256',
    },
  ];

  const nextTestimonial = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const prevTestimonial = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    // Auto-rotate testimonials
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);

    return () => clearInterval(interval);
  }, [activeIndex, isAnimating]);

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="py-20 bg-gray-50 dark:bg-gray-900/50 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className={`transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 className="text-3xl font-extrabold text-center text-gray-900 dark:text-white sm:text-4xl">
            What our clients say
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-center text-xl text-gray-600 dark:text-gray-300">
            Don't take our word for it. Hear from some of our amazing customers.
          </p>
        </div>

        <div 
          className={`mt-16 transition-all duration-1000 delay-300 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="relative">
            <div className="relative mx-auto max-w-3xl rounded-2xl bg-white dark:bg-gray-800 p-8 md:p-10 shadow-xl">
              <div className="absolute -top-2 -left-2 w-24 h-24 bg-blue-500 rounded-full opacity-10 blur-2xl"></div>
              <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-teal-500 rounded-full opacity-10 blur-xl"></div>
              
              <div className="relative">
                <svg 
                  className="absolute top-0 left-0 transform -translate-x-6 -translate-y-8 h-16 w-16 text-gray-200 dark:text-gray-700" 
                  fill="currentColor" 
                  viewBox="0 0 32 32"
                >
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                
                <div className="relative">
                  <div className={`transition-opacity duration-500 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
                    <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 font-medium">
                      {testimonials[activeIndex].content}
                    </p>
                    <div className="mt-8 flex items-center">
                      <img
                        src={testimonials[activeIndex].image}
                        alt={testimonials[activeIndex].author}
                        className="h-14 w-14 rounded-full object-cover"
                      />
                      <div className="ml-4">
                        <p className="text-base font-semibold text-gray-900 dark:text-white">
                          {testimonials[activeIndex].author}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {testimonials[activeIndex].role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 flex justify-center space-x-3">
              <button
                onClick={prevTestimonial}
                className="inline-flex items-center p-2 border border-transparent rounded-full shadow-sm text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <span className="sr-only">Previous testimonial</span>
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      if (!isAnimating && index !== activeIndex) {
                        setIsAnimating(true);
                        setActiveIndex(index);
                        setTimeout(() => setIsAnimating(false), 500);
                      }
                    }}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      activeIndex === index
                        ? 'bg-blue-600 dark:bg-blue-400 w-8'
                        : 'bg-gray-300 dark:bg-gray-600'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={nextTestimonial}
                className="inline-flex items-center p-2 border border-transparent rounded-full shadow-sm text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <span className="sr-only">Next testimonial</span>
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;