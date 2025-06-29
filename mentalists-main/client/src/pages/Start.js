import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Menu, X, ArrowRight } from 'lucide-react';

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Sample images for slideshow
  const slides = [
    "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1594736797933-d0d3085cf6dd?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&h=600&fit=crop"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const locations = [
    { state: "West Bengal", cities: ["Kolkata", "Howrah", "Belur", "Bardhaman", "Nadia"] },
    { state: "Telangana", cities: ["Hyderabad", "Sangareddy", "Mahaboobnagar", "Warangal"] },
    { state: "Delhi", cities: ["Delhi"] },
    { state: "Haryana", cities: ["Gurgaon"] },
    { state: "Maharashtra", cities: ["Mumbai", "Pune", "Nagpur"] },
    { state: "Uttar Pradesh", cities: ["Lucknow", "Prayagraj", "Noida"] },
    { state: "Odisha", cities: ["Sambalpur", "Rourkela", "Bhubaneshwar", "Cuttack"] }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        {/* Top Banner */}
        <div className="bg-gray-800 text-white py-2 px-4 text-sm">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="flex space-x-8">
              <span className="text-red-400">IND Ranks 132 - Education</span>
              <span className="text-red-400">IND Ranks 111 - Hunger</span>
            </div>
            <div className="flex space-x-4">
              <button className="hover:text-blue-400">eB2B</button>
              <button className="hover:text-blue-400">Fraud Alert</button>
              <button className="hover:text-blue-400">Contact Us</button>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <nav className="bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* Logo */}
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full" style={{ backgroundColor: '#023080' }}>
                    <div className="w-full h-full rounded-full flex items-center justify-center text-white font-bold text-xl">
                      S
                    </div>
                  </div>
                </div>
                <div className="ml-3">
                  <div className="text-xl font-bold text-gray-900">SWIS</div>
                  <div className="text-xs text-gray-600">Turning Compassion into Action</div>
                </div>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-8">
                  <a href="#" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium">About Us</a>
                  <a href="#" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium">Interventions</a>
                  <a href="#" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium">Get Involved</a>
                  <a href="#" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium">Careers</a>
                </div>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-gray-400 hover:text-gray-500"
                >
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden bg-white border-t"
              >
                <div className="px-2 pt-2 pb-3 space-y-1">
                  <a href="#" className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-blue-600">About Us</a>
                  <a href="#" className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-blue-600">Interventions</a>
                  <a href="#" className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-blue-600">Get Involved</a>
                  <a href="#" className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-blue-600">Careers</a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </header>

      {/* Hero Section */}
      <section
        className="relative h-screen flex items-center justify-start bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1920&h=1080&fit=crop")',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-white"
          >
            <h1 className="text-5xl md:text-7xl font-serif mb-8">
              Turning Compassion<br />into Action
            </h1>
            <div className="w-32 h-1 mb-8" style={{ backgroundColor: '#d2d5e0' }}></div>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="border border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-2">
                about us <ArrowRight size={16} />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-2">
                our impact <ArrowRight size={16} />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* We Care Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="text-6xl font-bold mb-8 tracking-wider">
              {['W', 'E', ' ', 'C', 'A', 'R', 'E'].map((letter, index) => (
                <span
                  key={index}
                  className="inline-block"
                  style={{
                    backgroundImage: `url("https://images.unsplash.com/photo-1577896851231-70ef18881754?w=400&h=300&fit=crop")`,
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                    backgroundSize: 'cover',
                    backgroundPosition: `${index * 20}% center`
                  }}
                >
                  {letter}
                </span>
              ))}
            </div>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                SWIS™ is an Indian non-profit committed to radically impact the life of 2M+ people in the next 2 decades.
              </p>
              <div className="grid grid-cols-3 gap-8 mt-16">
                <div className="text-center">
                  <div className="w-full h-1 mb-4" style={{ backgroundColor: '#023080' }}></div>
                  <h3 className="text-lg font-semibold" style={{ color: '#023080' }}>Sustainability</h3>
                </div>
                <div className="text-center">
                  <div className="w-full h-1 mb-4" style={{ backgroundColor: '#023080' }}></div>
                  <h3 className="text-lg font-semibold" style={{ color: '#023080' }}>Innovation</h3>
                </div>
                <div className="text-center">
                  <div className="w-full h-1 mb-4" style={{ backgroundColor: '#023080' }}></div>
                  <h3 className="text-lg font-semibold" style={{ color: '#023080' }}>Our Impact</h3>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Interventions Section */}
      <section
        className="py-20 bg-gray-900 text-white relative"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1594736797933-d0d3085cf6dd?w=1920&h=1080&fit=crop")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <div className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: '#d2d5e0' }}></div>
                <span className="text-sm uppercase tracking-wider" style={{ color: '#d2d5e0' }}>OUR INTERVENTIONS</span>
              </div>
              <h2 className="text-5xl font-serif mb-8">Education</h2>
              <p className="text-lg leading-relaxed mb-8">
                Our mission to democratize access to quality education drives our relentless work with underserved children across India. At SWIS, we partner with shelter homes, government schools, and slum communities to provide holistic educational support.
              </p>
              <p className="text-lg leading-relaxed mb-8">
                Education is not just a right; it is a powerful tool for breaking intergenerational cycles of poverty. Our interventions go beyond classroom instruction—we work with communities, parents, and local schools to foster a culture of learning.
              </p>
              <button className="border border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-2">
                read more <ArrowRight size={16} />
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="border-l-4 border-orange-400 pl-6 py-4 hover:bg-black hover:bg-opacity-30 transition-all duration-300">
                <h3 className="text-xl font-semibold mb-2" style={{ color: '#FCFDFF' }}>EDUCATION</h3>
              </div>
              <div className="border-l-4 border-transparent pl-6 py-4 hover:border-orange-400 hover:bg-black hover:bg-opacity-30 transition-all duration-300">
                <h3 className="text-xl font-semibold mb-2" style={{ color: '#FCFDFF' }}>SKILL DEVELOPMENT</h3>
              </div>
              <div className="border-l-4 border-transparent pl-6 py-4 hover:border-orange-400 hover:bg-black hover:bg-opacity-30 transition-all duration-300">
                <h3 className="text-xl font-semibold mb-2" style={{ color: '#FCFDFF' }}>NUTRITION</h3>
              </div>
              <div className="border-l-4 border-transparent pl-6 py-4 hover:border-orange-400 hover:bg-black hover:bg-opacity-30 transition-all duration-300">
                <h3 className="text-xl font-semibold mb-2" style={{ color: '#FCFDFF' }}>HEALTHCARE</h3>
              </div>
              <div className="border-l-4 border-transparent pl-6 py-4 hover:border-orange-400 hover:bg-black hover:bg-opacity-30 transition-all duration-300">
                <h3 className="text-xl font-semibold mb-2" style={{ color: '#FCFDFF' }}>RELIEF OF POOR</h3>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Centers Section */}
      <section style={{ backgroundColor: '#023080' }} className="py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="w-full h-1 mb-4" style={{ backgroundColor: '#d2d5e0' }}></div>
              <h3 className="text-lg font-semibold">CSAA</h3>
            </div>
            <div className="text-center">
              <div className="w-full h-1 mb-4" style={{ backgroundColor: '#d2d5e0' }}></div>
              <h3 className="text-lg font-semibold">CSII</h3>
            </div>
            <div className="text-center">
              <div className="w-full h-1 mb-4" style={{ backgroundColor: '#d2d5e0' }}></div>
              <h3 className="text-lg font-semibold">CCAE</h3>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl font-serif mb-8">Centre for Social<br />Awareness & Action</h2>
              <p className="text-lg leading-relaxed mb-8">
                Our commitment to creating socially aware leaders is embedded in the work of the Centre for Social Awareness & Action. We recognize that lasting impact begins with understanding—and CSAA equips youth, changemakers, and professionals with the tools to analyze, engage, and act on pressing social issues.
              </p>
              <p className="text-lg leading-relaxed mb-8">
                Our mission is to drive systemic change through education and experiential learning. By nurturing a new generation of social advocates, proposal writers, and on-ground project designers, CSAA serves as a launchpad for impact-driven careers and initiatives.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex items-center justify-center"
            >
              <img
                src="https://images.unsplash.com/photo-1577896851231-70ef18881754?w=600&h=400&fit=crop"
                alt="Solar panels representing sustainability"
                className="rounded-lg shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Reach and Presence Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-8" style={{ color: '#023080' }}>Our Reach and Presence</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              SWIS operates across multiple states in India, bringing sustainable change to communities nationwide.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <img
                src="/lovable-uploads/53ed15fa-9736-4d00-a9ae-935b6d8a1e66.png"
                alt="India Map showing SWIS presence"
                className="max-w-full h-auto"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {locations.map((location, index) => (
                <div key={index} className="p-4 rounded-lg border border-gray-200 hover:shadow-lg transition-all duration-300">
                  <h3 className="text-xl font-semibold mb-3" style={{ color: '#023080' }}>{location.state}</h3>
                  <div className="flex flex-wrap gap-2">
                    {location.cities.map((city, cityIndex) => (
                      <span
                        key={cityIndex}
                        className="px-3 py-1 text-sm rounded-full"
                        style={{ backgroundColor: '#d2d5e0', color: '#023080' }}
                      >
                        {city}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Life at SWIS Section */}
      <section
        className="py-20 relative"
        style={{ backgroundColor: '#8e9fc5' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-white"
            >
              <h2 className="text-5xl font-serif mb-8">Life at SWIS</h2>
              <h3 className="text-2xl font-semibold mb-6">Why work at SWIS?</h3>
              <p className="text-lg leading-relaxed mb-8">
                SWIS is one of the most impactful non-profit organizations in India. With the help of a robust, consistent, and merit-driven framework for people management, SWIS continues to maintain an inclusive, progressive, and high-performance environment, where purpose-driven talent is enabled with unprecedented access to opportunities for growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="border border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-2">
                  meet our people <ArrowRight size={16} />
                </button>
                <button className="border border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-2">
                  search & apply <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative h-96 rounded-lg overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentSlide}
                    src={slides[currentSlide]}
                    alt={`Slide ${currentSlide + 1}`}
                    className="absolute inset-0 w-full h-full object-cover"
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5 }}
                  />
                </AnimatePresence>
               
                {/* Navigation Arrows */}
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all duration-300"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all duration-300"
                >
                  <ChevronRight size={20} />
                </button>

                {/* Slide Indicators */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Additional Images Grid */}
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="relative h-32 rounded-lg overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=300&fit=crop"
                    alt="Team collaboration"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-2 left-2 bg-red-600 text-white px-2 py-1 text-xs rounded">
                    Best Employers
                  </div>
                </div>
                <div className="relative h-32 rounded-lg overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1577896851231-70ef18881754?w=400&h=300&fit=crop"
                    alt="Impact work"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 rounded-full" style={{ backgroundColor: '#023080' }}>
                  <div className="w-full h-full rounded-full flex items-center justify-center text-white font-bold">S</div>
                </div>
                <span className="ml-2 text-xl font-bold">SWIS</span>
              </div>
              <p className="text-gray-400">Turning Compassion into Action</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">About</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Our Story</a></li>
                <li><a href="#" className="hover:text-white">Mission & Vision</a></li>
                <li><a href="#" className="hover:text-white">Leadership</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Interventions</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Education</a></li>
                <li><a href="#" className="hover:text-white">Healthcare</a></li>
                <li><a href="#" className="hover:text-white">Skill Development</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Get Involved</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Volunteer</a></li>
                <li><a href="#" className="hover:text-white">Donate</a></li>
                <li><a href="#" className="hover:text-white">Partner</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 SWIS. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;