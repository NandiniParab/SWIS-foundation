import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Menu, X, ArrowRight, Building, TrendingUp, Users } from 'lucide-react';

const Homepage = () => { // Changed from Index to Homepage
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

  const partnerLogos = [
    "/lovable-uploads/5373f37c-4692-4348-b4f0-cf58ed3b35a9.png",
    "/lovable-uploads/529a02fb-320f-4d30-a086-f3181bdaf088.png",
    "/lovable-uploads/b7cdd1b9-9e6d-4002-bee8-0bcb4526e482.png",
  ];

  const ImageSlideshow = ({ images, className = "" }) => {
    const [currentImageSlide, setCurrentImageSlide] = useState(0);

    useEffect(() => {
      const timer = setInterval(() => {
        setCurrentImageSlide((prev) => (prev + 1) % images.length);
      }, 3000);
      return () => clearInterval(timer);
    }, [images.length]);

    return (
      <div className={`relative h-96 rounded-lg overflow-hidden ${className}`}>
        <AnimatePresence mode="wait">
          <motion.img
            key={currentImageSlide}
            src={images[currentImageSlide]}
            alt={`Slide ${currentImageSlide + 1}`}
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
          />
        </AnimatePresence>
      </div>
    );
  };

  const LogoStrip = ({ logos, direction = "left" }) => (
    <div className="overflow-hidden relative mt-8">
      <motion.div
        className="flex gap-8 items-center"
        animate={{ x: direction === "left" ? [-100, -2000] : [0, 1900] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          },
        }}
      >
        {[...Array(3)].map((_, i) => (
          <div key={i} className="flex gap-8 items-center">
            {logos.map((logo, index) => (
              <div key={index} className="w-32 h-20 bg-white rounded-lg p-2 flex items-center justify-center shadow-md">
                <img src={logo} alt={`Partner ${index + 1}`} className="max-w-full max-h-full object-contain" />
              </div>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );

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
                  <div className="relative group">
                    <button className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium">Interventions</button>
                    <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                      <a href="/education" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Education</a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Skill Development</a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Nutrition</a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Healthcare</a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Relief of Poor</a>
                    </div>
                  </div>
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
                  <a href="/education" className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-blue-600">Education</a>
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
            </div>
          </motion.div>
        </div>
      </section>

      {/* CSAA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-4" style={{ color: '#023080' }}>CSAA</h2>
              <h3 className="text-2xl font-semibold mb-6 text-gray-700">Centre for Social Awareness & Action</h3>
              <p className="text-lg leading-relaxed text-gray-600 mb-6">
                Our commitment to creating socially aware leaders is embedded in the work of the Centre for Social Awareness & Action. We recognize that lasting impact begins with understanding—and CSAA equips youth, changemakers, and professionals with the tools to analyze, engage, and act on pressing social issues. Through intensive courses, live projects, field immersions, and practical workshops, CSAA fosters a deep sense of responsibility and purpose.
              </p>
              <p className="text-lg leading-relaxed text-gray-600">
                Our mission is to drive systemic change through education and experiential learning. By nurturing a new generation of social advocates, proposal writers, and on-ground project designers, CSAA serves as a launchpad for impact-driven careers and initiatives. Every engagement is designed to spark thought, build empathy, and translate awareness into meaningful social action.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <ImageSlideshow images={slides} />
            </motion.div>
          </div>
          <LogoStrip logos={partnerLogos} direction="left" />
        </div>
      </section>

      {/* CSII Section */}
      <section className="py-20" style={{ backgroundColor: '#8e9fc5' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:order-1"
            >
              <ImageSlideshow images={slides} />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:order-2 text-white"
            >
              <h2 className="text-4xl font-bold mb-4">CSII</h2>
              <h3 className="text-2xl font-semibold mb-6">Centre for Social Impact & Innovation</h3>
              <p className="text-lg leading-relaxed mb-6">
                Growth is meaningful only when it uplifts those at the grassroots. The Centre for Social Impact & Innovation stands at the intersection of strategy, support, and sustainability—empowering small and mid-sized NGOs with the tools, training, and resources they need to scale impact. Through CSR facilitation, access to grants, and powerful partnerships, CSII enables ideas to become institutions of change.
              </p>
              <p className="text-lg leading-relaxed">
                We are committed to building the next generation of high-impact organizations. Our capacity-building initiatives go beyond compliance, focusing on innovation, resilience, and operational excellence. CSII supports organizations to become agile, accountable, and aligned with the broader SDG framework—ensuring that every rupee invested creates enduring social value.
              </p>
            </motion.div>
          </div>
          <LogoStrip logos={partnerLogos} direction="right" />
        </div>
      </section>

      {/* CCAE Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-4" style={{ color: '#023080' }}>CCAE</h2>
              <h3 className="text-2xl font-semibold mb-6 text-gray-700">Centre for Civil Administration & Engagement</h3>
              <p className="text-lg leading-relaxed text-gray-600 mb-6">
                At SWIS, we believe that democracy thrives when citizens are engaged and informed. The Centre for Civil Administration & Engagement is our initiative to build civic consciousness through fellowships, structured volunteering, and real-world exposure to public systems. By placing young citizens in the heart of governance and community action, CCAE nurtures a new culture of ethical public engagement.
              </p>
              <p className="text-lg leading-relaxed text-gray-600">
                Our goal is to create a generation that doesn't just demand change—but knows how to deliver it. Through mentorship, training, and field experiences with local government bodies and civil society partners, CCAE transforms idealism into public leadership. Every program we run is an investment in participatory democracy and responsive governance.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <ImageSlideshow images={slides} />
            </motion.div>
          </div>
          <LogoStrip logos={partnerLogos} direction="left" />
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
                src="/lovable-uploads/8cd6b2ee-2f04-4f7c-a966-3ae3cd6cab86.png"
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

      {/* Impact Grid Section */}
      <section className="py-20" style={{ backgroundColor: '#023080' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-8 text-white">Our Impact</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transforming lives across India through sustainable interventions and community engagement.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
            {/* 12+ Locations */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-900 to-blue-800 p-8 rounded-lg text-white text-center"
            >
              <h3 className="text-4xl font-bold mb-4">12+</h3>
              <p className="text-xl font-semibold">Locations</p>
            </motion.div>

            {/* Children studying image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="rounded-lg overflow-hidden"
            >
              <img 
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400&h=300&fit=crop"
                alt="Children studying"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* 3K+ Benefited */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-900 to-blue-800 p-8 rounded-lg text-white text-center"
            >
              <h3 className="text-4xl font-bold mb-4">3K+</h3>
              <p className="text-xl font-semibold">Benefited</p>
            </motion.div>

            {/* Group learning image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="rounded-lg overflow-hidden"
            >
              <img 
                src="https://images.unsplash.com/photo-1577896851231-70ef18881754?w=400&h=300&fit=crop"
                alt="Group learning"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* 10K+ Impacted */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-900 to-blue-800 p-8 rounded-lg text-white text-center"
            >
              <h3 className="text-4xl font-bold mb-4">10K+</h3>
              <p className="text-xl font-semibold">Impacted</p>
            </motion.div>

            {/* Classroom image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="rounded-lg overflow-hidden"
            >
              <img 
                src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=300&fit=crop"
                alt="Classroom"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* 25+ Partners */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-900 to-blue-800 p-8 rounded-lg text-white text-center lg:col-span-1"
            >
              <h3 className="text-4xl font-bold mb-4">25+</h3>
              <p className="text-xl font-semibold">Partners</p>
            </motion.div>

            {/* Team image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
              className="rounded-lg overflow-hidden lg:col-span-2"
            >
              <img 
                src="https://images.unsplash.com/photo-1594736797933-d0d3085cf6dd?w=800&h=300&fit=crop"
                alt="Team"
                className="w-full h-full object-cover"
              />
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
            <p>© 2024 SWIS. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Homepage; 