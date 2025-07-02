import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { 
  BookOpen, 
  Building, 
  Users, 
  Monitor, 
  ChevronLeft, 
  ChevronRight,
  Menu,
  X,
  ArrowRight,
  Target,
  Home,
  Mountain,
  Shield
} from 'lucide-react';

// Counter animation component
const AnimatedCounter = ({ value, duration = 2 }) => {
  const [count, setCount] = useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let startTime;
      const startValue = 0;
      const endValue = value;

      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
        
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentCount = Math.floor(startValue + (endValue - startValue) * easeOutQuart);
        
        setCount(currentCount);

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [isInView, value, duration]);

  return <span ref={ref}>{count}</span>;
};

const Education = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeCard, setActiveCard] = useState(0);
  const [selectedTimelineItem, setSelectedTimelineItem] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Timeline data
  const timelineData = [
    {
      year: '1947',
      percentage: '88%',
      description: 'of India was uneducated',
      image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&h=600&fit=crop'
    },
    {
      year: '2005',
      percentage: '40%',
      description: 'of India was uneducated',
      image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=600&fit=crop'
    },
    {
      year: '2015',
      percentage: '27%',
      description: 'of India was uneducated',
      image: 'https://images.unsplash.com/photo-1594736797933-d0d3085cf6dd?w=800&h=600&fit=crop'
    },
    {
      year: '2024',
      percentage: '20%',
      description: 'of India was uneducated',
      image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&h=600&fit=crop'
    }
  ];

  // Cards data
  const cardsData = [
    {
      icon: BookOpen,
      title: 'Quality Education',
      fullTitle: 'Providing Quality Education',
      content: 'Over 50% of children in India can\'t read simple text by age 10 (World Bank, 2022), reflecting a deep learning crisis in basic education.'
    },
    {
      icon: Building,
      title: 'Infrastructure',
      fullTitle: 'Improving School Infrastructure',
      content: 'Only 38.5% of schools have all basic facilities like electricity, toilets, drinking water, and boundary walls (UDISE+ 2022–23).'
    },
    {
      icon: Users,
      title: 'Teacher Training',
      fullTitle: 'Training Community Teachers',
      content: 'More than 11% of elementary-level teachers remain untrained, and many face poor student-teacher ratios exceeding 50:1 in some states.'
    },
    {
      icon: Monitor,
      title: 'Digital Classrooms',
      fullTitle: 'Setting Up Digital Classrooms & Libraries',
      content: 'Less than 30% of schools have internet access, and only 32% have a functional library, widening the learning gap in underserved areas.'
    }
  ];

  // Slideshow images
  const slideImages = [
    'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1594736797933-d0d3085cf6dd?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&h=600&fit=crop'
  ];

  // Impact areas data
  const impactAreas = [
    { 
      icon: Home, 
      title: 'Urban slums', 
      image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=400&h=300&fit=crop',
      bgColor: '#023080'
    },
    { 
      icon: Mountain, 
      title: 'Rural villages', 
      image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=300&fit=crop',
      bgColor: '#8e9fc5'
    },
    { 
      icon: Shield, 
      title: 'Shelter homes', 
      image: 'https://images.unsplash.com/photo-1594736797933-d0d3085cf6dd?w=400&h=300&fit=crop',
      bgColor: '#d2d5e0'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slideImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slideImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slideImages.length) % slideImages.length);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="bg-gray-800 text-white py-2 px-4 text-sm">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="flex space-x-8">
              <span className="text-red-400">IND Ranks 132 - Education</span>
              <span className="text-red-400">IND Ranks 111 - Hunger</span>
            </div>
            <div className="flex space-x-4">
              <button className="hover:text-blue-400">eB2B</button>
              <button className="hover:text-blue-400">Contact Us</button>
            </div>
          </div>
        </div>

        <nav className="bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full" style={{ backgroundColor: '#023080' }}>
                    <div className="w-full h-full rounded-full flex items-center justify-center text-white font-bold text-xl">S</div>
                  </div>
                </div>
                <div className="ml-3">
                  <div className="text-xl font-bold text-gray-900">SWIS</div>
                  <div className="text-xs text-gray-600">Turning Compassion into Action</div>
                </div>
              </div>

              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-8">
                  <a href="/" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium">Home</a>
                  <a href="#" className="text-blue-600 px-3 py-2 text-sm font-medium border-b-2 border-blue-600">Education</a>
                  <a href="#" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium">Skill Development</a>
                  <a href="#" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium">Nutrition</a>
                  <a href="#" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium">Healthcare</a>
                  <a href="#" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium">Relief of Poor</a>
                </div>
              </div>

              <div className="md:hidden">
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-400 hover:text-gray-500">
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
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
                    <a href="/" className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-blue-600">Home</a>
                    <a href="#" className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-blue-600">Education</a>
                    <a href="#" className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-blue-600">Skill Development</a>
                    <a href="#" className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-blue-600">Nutrition</a>
                    <a href="#" className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-blue-600">Healthcare</a>
                    <a href="#" className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-blue-600">Relief of Poor</a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>
      </header>

      {/* Hero Section with Timeline Background */}
      <section 
        className="relative h-screen flex items-center justify-center"
        style={{
          backgroundImage: `url("${timelineData[selectedTimelineItem].image}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-6xl font-serif mb-8">Education</h1>
            <p className="text-2xl mb-12 max-w-3xl mx-auto">
              An educated India, <span className="text-blue-300 italic">within our lifetime</span>
            </p>
          </motion.div>

          {/* Timeline with increased spacing and connecting lines */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative flex justify-center items-center space-x-16 mt-16"
          >
            {/* Continuous connecting line */}
            <div className="absolute top-1/2 left-[5%] right-[5%] h-0.5 bg-white bg-opacity-30 transform -translate-y-1/2"></div>
            
            {timelineData.map((item, index) => (
              <div key={index} className="relative flex flex-col items-center z-10">
                <motion.button
                  onClick={() => setSelectedTimelineItem(index)}
                  className={`flex flex-col items-center p-6 rounded-lg transition-all duration-300 bg-black bg-opacity-40 ${
                    selectedTimelineItem === index ? 'bg-white bg-opacity-20 scale-110' : 'hover:bg-white hover:bg-opacity-10'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="text-4xl font-bold" style={{ color: '#FCFDFF' }}>{item.year}</div>
                  <div className={`w-6 h-6 rounded-full my-3 ${selectedTimelineItem === index ? 'bg-white' : 'bg-white bg-opacity-50'}`}></div>
                  <div className="text-3xl font-bold" style={{ color: '#023080', backgroundColor: '#FCFDFF', padding: '8px 16px', borderRadius: '8px' }}>
                    {item.percentage}
                  </div>
                  <div className="text-sm mt-3 text-center max-w-32">{item.description}</div>
                </motion.button>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Rough Edge Image Section */}
      <div className="relative">
        <div 
          className="absolute top-0 left-0 right-0 h-8 bg-white"
          style={{
            clipPath: 'polygon(0 0, 100% 0, 95% 100%, 85% 70%, 75% 100%, 65% 60%, 55% 100%, 45% 65%, 35% 100%, 25% 75%, 15% 100%, 5% 60%, 0 100%)'
          }}
        ></div>
        <img 
          src="https://images.unsplash.com/photo-1577896851231-70ef18881754?w=1920&h=400&fit=crop"
          alt="Children in education"
          className="w-full h-64 object-cover"
        />
        <div 
          className="absolute bottom-0 left-0 right-0 h-8"
          style={{
            backgroundColor: '#04307b',
            clipPath: 'polygon(0 100%, 100% 100%, 95% 0, 85% 30%, 75% 0, 65% 40%, 55% 0, 45% 35%, 35% 0, 25% 25%, 15% 0, 5% 40%, 0 0)'
          }}
        ></div>
      </div>

      {/* Main Content Section */}
      <section className="py-20" style={{ backgroundColor: '#04307b' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-xl leading-relaxed text-white max-w-5xl mx-auto">
              India is home to over 250 million school-going children, the largest in the world. Yet, the ASER 2023 report reveals that over 60% of Class 5 students in rural India cannot read a Class 2-level textbook. Dropout rates remain alarmingly high, especially among marginalized communities and girls.
            </p>
            <p className="text-xl leading-relaxed text-white max-w-5xl mx-auto mt-8">
              At SWIS, we believe that education is the foundation of empowerment. We work with government schools, shelter homes, and community learning centers to ensure every child, regardless of background, has access to quality, inclusive education.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Cards Section with Horizontal Navigation */}
      <section className="py-20" style={{ backgroundColor: '#8e9fc5' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Horizontal Navigation Buttons */}
          <div className="flex justify-center gap-2 mb-12">
            {cardsData.map((card, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveCard(index)}
                className={`flex items-center gap-3 px-12 py-6 rounded-lg transition-all duration-300 border-2 flex-1 ${
                  activeCard === index 
                    ? 'border-orange-400 bg-white shadow-lg' 
                    : 'border-gray-300 bg-white hover:border-orange-300 hover:shadow-md'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {React.createElement(card.icon, { 
                  size: 24, 
                  style: { color: activeCard === index ? '#023080' : '#666' } 
                })}
                <span className={`font-semibold text-center ${activeCard === index ? 'text-gray-900' : 'text-gray-600'}`}>
                  {card.title}
                </span>
              </motion.button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left side - Active Card Content */}
            <div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCard}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white p-8 rounded-lg shadow-lg border border-gray-200"
                >
                  <div className="flex items-center mb-4">
                    {React.createElement(cardsData[activeCard].icon, { 
                      size: 32, 
                      style: { color: '#023080' } 
                    })}
                    <h3 className="text-2xl font-bold ml-4" style={{ color: '#023080' }}>
                      {cardsData[activeCard].fullTitle}
                    </h3>
                  </div>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {cardsData[activeCard].content}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right side - Image Slideshow */}
            <div className="relative">
              <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
                {/* Rough edge top */}
                <div 
                  className="absolute top-0 left-0 right-0 h-4 bg-white z-10"
                  style={{
                    clipPath: 'polygon(0 0, 100% 0, 95% 100%, 85% 70%, 75% 100%, 65% 60%, 55% 100%, 45% 65%, 35% 100%, 25% 75%, 15% 100%, 5% 60%, 0 100%)'
                  }}
                ></div>
                
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentSlide}
                    src={slideImages[currentSlide]}
                    alt={`Slide ${currentSlide + 1}`}
                    className="absolute inset-0 w-full h-full object-cover"
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5 }}
                  />
                </AnimatePresence>
                
                {/* Rough edge bottom */}
                <div 
                  className="absolute bottom-0 left-0 right-0 h-4 bg-white z-10"
                  style={{
                    clipPath: 'polygon(0 100%, 100% 100%, 95% 0, 85% 30%, 75% 0, 65% 40%, 55% 0, 45% 35%, 35% 0, 25% 25%, 15% 0, 5% 40%, 0 0)'
                  }}
                ></div>
                
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all duration-300 z-20"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all duration-300 z-20"
                >
                  <ChevronRight size={20} />
                </button>

                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
                  {slideImages.map((_, index) => (
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
            </div>
          </div>
        </div>
      </section>

      {/* Impact Areas Grid */}
      <section className="py-20" style={{ backgroundColor: '#d2d5e0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16"
            style={{ color: '#023080' }}
          >
            Our Impact Areas
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {impactAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 bg-white text-center"
                whileHover={{ scale: 1.05 }}
              >
                {/* Image section with rough edges */}
                <div className="relative h-48 overflow-hidden">
                  <div 
                    className="absolute top-0 left-0 right-0 h-3 z-10 bg-white"
                    style={{
                      clipPath: 'polygon(0 0, 100% 0, 95% 100%, 85% 70%, 75% 100%, 65% 60%, 55% 100%, 45% 65%, 35% 100%, 25% 75%, 15% 100%, 5% 60%, 0 100%)'
                    }}
                  ></div>
                  <img 
                    src={area.image}
                    alt={area.title}
                    className="w-full h-full object-cover"
                  />
                  <div 
                    className="absolute bottom-0 left-0 right-0 h-3 z-10 bg-white"
                    style={{
                      clipPath: 'polygon(0 100%, 100% 100%, 95% 0, 85% 30%, 75% 0, 65% 40%, 55% 0, 45% 35%, 35% 0, 25% 25%, 15% 0, 5% 40%, 0 0)'
                    }}
                  ></div>
                </div>

                {/* Content section */}
                <div className="p-6">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    {React.createElement(area.icon, { 
                      size: 32, 
                      style: { color: area.bgColor }
                    })}
                    <h3 className="text-xl font-bold" style={{ color: area.bgColor }}>
                      {area.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Second Rough Edge Image Section */}
      <div className="relative">
        <div 
          className="absolute top-0 left-0 right-0 h-8"
          style={{
            backgroundColor: '#d2d5e0',
            clipPath: 'polygon(0 0, 100% 0, 95% 100%, 85% 70%, 75% 100%, 65% 60%, 55% 100%, 45% 65%, 35% 100%, 25% 75%, 15% 100%, 5% 60%, 0 100%)'
          }}
        ></div>
        <img 
          src="https://images.unsplash.com/photo-1594736797933-d0d3085cf6dd?w=1920&h=400&fit=crop"
          alt="Educational impact"
          className="w-full h-64 object-cover"
        />
        <div 
          className="absolute bottom-0 left-0 right-0 h-8"
          style={{
            backgroundColor: '#023080',
            clipPath: 'polygon(0 100%, 100% 100%, 95% 0, 85% 30%, 75% 0, 65% 40%, 55% 0, 45% 35%, 35% 0, 25% 25%, 15% 0, 5% 40%, 0 0)'
          }}
        ></div>
      </div>

      {/* Impact Statistics Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
              <motion.div
                className="text-center"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-6xl font-bold mb-4" style={{ color: '#023080' }}>
                  <AnimatedCounter value={5} />+
                </div>
                <div className="text-xl text-gray-600">Locations</div>
              </motion.div>
              <motion.div
                className="text-center"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="text-6xl font-bold mb-4" style={{ color: '#023080' }}>
                  <AnimatedCounter value={8} />+
                </div>
                <div className="text-xl text-gray-600">Partnered Learning Centres</div>
              </motion.div>
              <motion.div
                className="text-center"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="text-6xl font-bold mb-4" style={{ color: '#023080' }}>
                  <AnimatedCounter value={40} />+
                </div>
                <div className="text-xl text-gray-600">Teachers</div>
              </motion.div>
              <motion.div
                className="text-center"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="text-6xl font-bold mb-4" style={{ color: '#023080' }}>
                  <AnimatedCounter value={2000} />+
                </div>
                <div className="text-xl text-gray-600">Beneficiaries</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Impact Goal Section */}
      <section 
        className="py-20 text-white relative"
        style={{ backgroundColor: '#023080' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="flex justify-center mb-8"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Target size={64} style={{ color: '#d2d5e0' }} />
            </motion.div>
            <h2 className="text-5xl font-serif mb-8">Impact Goal</h2>
            <p className="text-2xl leading-relaxed max-w-4xl mx-auto">
              Enable a capacity to impact <span className="font-bold" style={{ color: '#023080' }}>
                <AnimatedCounter value={10000} />+ children annually by 2030
              </span> to access and complete basic education, especially in underserved regions.
            </p>
            <motion.div 
              className="mt-12"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a 
                href="/JoinUs"
                className="border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-2 mx-auto text-lg font-medium"
              >
                Join Our Mission <ArrowRight size={20} />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Child Education Statistics Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold mb-8">
              Statistics About <span style={{ color: '#023080' }}>Child Education</span> in India
            </h2>
            <p className="text-lg text-gray-700 max-w-6xl mx-auto mb-16">
              Despite progress made in recent years and a large number of NGOs working for education in India, the below numbers highlight the urgent need to provide help for the education of children. Children are the building blocks of our nation, their future depends on us.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg shadow-lg"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-7xl font-bold mb-4" style={{ color: '#023080' }}>
                  <AnimatedCounter value={46} />
                </div>
                <div className="text-2xl font-bold mb-4" style={{ color: '#023080' }}>million</div>
                <div className="text-gray-700 mb-4">children, between 6-18 years of age, do not go to school</div>
                <div className="text-sm text-gray-500">
                  <div style={{ color: '#023080' }}>Estimate: RGI Census</div>
                  <div style={{ color: '#023080' }}>Population Projection 2016</div>
                  <div style={{ color: '#023080' }}>and UDISE 2016-17</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg shadow-lg"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-7xl font-bold mb-4" style={{ color: '#023080' }}>
                  <AnimatedCounter value={33} />
                </div>
                <div className="text-2xl font-bold mb-4" style={{ color: '#023080' }}>million</div>
                <div className="text-gray-700 mb-4">child labourers go to work instead of school</div>
                <div className="text-sm" style={{ color: '#023080' }}>
                  Census 2011
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg shadow-lg"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-7xl font-bold mb-4" style={{ color: '#023080' }}>
                  <AnimatedCounter value={3} />%
                </div>
                <div className="text-gray-700 mb-4">
                  of schools in India provide complete school education from Class 1 to 12
                </div>
              </motion.div>
            </div>
          </motion.div>
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

export default Education;