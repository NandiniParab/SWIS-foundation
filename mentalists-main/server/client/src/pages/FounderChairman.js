
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Placeholder images for the rotating banner
const rotatingImages = [
  "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
];

// Gallery images
const allGalleryImages = [
  "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
];

// Award images
const awardImages = [
  "https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
  "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
  "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
  "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
  "https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
  "https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
];

// Founder image
const founderImage = "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80";

const FounderChairman = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [galleryImages, setGalleryImages] = useState([allGalleryImages[0], allGalleryImages[1], allGalleryImages[2]]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % rotatingImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setGalleryImages((prev) => {
      const currentFirstIndex = allGalleryImages.indexOf(prev[0]);
      const newFirstIndex = (currentFirstIndex - 1 + allGalleryImages.length) % allGalleryImages.length;
      return [
        allGalleryImages[newFirstIndex],
        allGalleryImages[(newFirstIndex + 1) % allGalleryImages.length],
        allGalleryImages[(newFirstIndex + 2) % allGalleryImages.length],
      ];
    });
  };

  const handleNext = () => {
    setGalleryImages((prev) => {
      const currentLastIndex = allGalleryImages.indexOf(prev[2]);
      const newFirstIndex = (currentLastIndex + 1) % allGalleryImages.length;
      return [
        allGalleryImages[newFirstIndex],
        allGalleryImages[(newFirstIndex + 1) % allGalleryImages.length],
        allGalleryImages[(newFirstIndex + 2) % allGalleryImages.length],
      ];
    });
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FCFDFF', fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
      {/* Rotating Banner Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="relative min-h-[85vh] lg:min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          background: `linear-gradient(135deg, rgba(2, 48, 128, 0.8), rgba(4, 48, 123, 0.6)), url(${rotatingImages[currentImageIndex]}) center/cover no-repeat`,
          transition: 'background-image 1s ease-in-out',
        }}
      >
        {/* Animated background overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#023080]/30 via-transparent to-[#04307b]/20"></div>
        
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1, type: "spring", stiffness: 60 }}
            className="backdrop-blur-md bg-white/10 rounded-3xl p-8 sm:p-12 border border-white/20 shadow-2xl"
          >
            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-light mb-6 sm:mb-8 leading-tight tracking-wide"
            >
              A timeless visionary
            </motion.h1>
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="text-lg sm:text-xl lg:text-2xl font-light leading-relaxed max-w-4xl mx-auto opacity-90"
            >
              whose legacy emboldens the imagination of a billion people
            </motion.p>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70"
        >
          <div className="flex flex-col items-center">
            <span className="text-sm mb-2 tracking-wider">SCROLL</span>
            <div className="w-0.5 h-8 bg-white/50"></div>
          </div>
        </motion.div>
      </motion.section>

      {/* Quote Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="py-16 sm:py-20 lg:py-24"
        style={{ backgroundColor: '#023080' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <motion.div
              initial={{ x: -60, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="order-2 lg:order-1"
            >
              <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-6 sm:p-8 border border-white/10">
                <blockquote className="text-xl sm:text-2xl lg:text-3xl font-light leading-relaxed text-white mb-6 sm:mb-8">
                  "Our dreams have to be bigger. Our ambitions higher. Our commitment deeper.
                  And our efforts greater. This is my dream for SWIS and for India."
                </blockquote>
                <cite className="text-lg sm:text-xl font-medium text-[#8e9fc5]">— Soubhik Kundu</cite>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ x: 60, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="order-1 lg:order-2 flex justify-center"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ duration: 0.4 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#8e9fc5] to-[#04307b] rounded-2xl blur-lg opacity-30 transform scale-105"></div>
                <img
                  src={founderImage}
                  alt="Soubhik Kundu"
                  className="relative w-64 sm:w-80 lg:w-96 h-80 sm:h-96 lg:h-[28rem] object-cover rounded-2xl shadow-2xl border-2 border-white/20"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Bio Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-16 sm:py-20 lg:py-24"
        style={{ backgroundColor: '#d2d5e0' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="backdrop-blur-sm bg-white/80 rounded-3xl p-8 sm:p-12 lg:p-16 shadow-xl border border-white/50"
          >
            <div className="text-center mb-12 lg:mb-16">
              <motion.h2
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="text-3xl sm:text-4xl lg:text-5xl font-light mb-4 sm:mb-6"
                style={{ color: '#04307b' }}
              >
                Founder–Chairman
              </motion.h2>
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="w-24 h-1 mx-auto rounded-full"
                style={{ backgroundColor: '#023080' }}
              ></motion.div>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 text-gray-700 leading-relaxed mb-12 lg:mb-16">
              <motion.div
                initial={{ x: -30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-6"
              >
                <p className="text-base sm:text-lg">
                  <strong className="font-semibold" style={{ color: '#04307b' }}>Soubhik Kundu</strong><br/>
                  <span className="text-[#8e9fc5] font-medium">Chairman & Managing Trustee – SWIS Foundation</span><br/>
                  <span className="text-[#8e9fc5] font-medium">Board Member – Institute for Social Welfare and Impact Solutions (SWIS Institute)</span>
                </p>
                
                {/* ... keep existing bio content paragraphs */}
                <p className="text-sm sm:text-base leading-relaxed">
                  Soubhik Kundu is a passionate changemaker, institution builder, and social impact strategist who
                  serves as the Chairman & Managing Trustee of the SWIS Foundation – Social Welfare and Impact
                  Solutions – a mission-driven organisation committed to advancing equity, grassroots
                  transformation, and inclusive development across India. He also serves as a Board Member at the
                  SWIS Institute, which anchors research, capacity building, and strategic program delivery under the
                  foundation's umbrella.
                </p>
                <p className="text-sm sm:text-base leading-relaxed">
                  Driven by the vision of empowering communities through expert-led and equity-centered
                  leadership, Soubhik has built a diverse ecosystem of projects, fellowships, and outreach programs
                  that span education, livelihoods, civic participation, and impact policy engagement. His efforts have
                  catalysed the formation of numerous institutional partnerships and have mobilized hundreds of
                  young changemakers across the country.
                </p>
                <p className="text-sm sm:text-base leading-relaxed">
                  He is also a Life Member of the Indian Red Cross Society (IRCS), reflecting his commitment to
                  humanitarian work and public service.
                </p>
                <p className="text-sm sm:text-base leading-relaxed">
                  Soubhik completed his schooling at St. Patrick's School, Telangana, and graduated from St.
                  Xavier's College (Autonomous), Kolkata in Economics with Sociology, Political Science, and
                  International Relations post which he moved to pursue his Master's in Political Science from the
                  University of Delhi.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ x: 30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="space-y-6"
              >
                <p className="text-sm sm:text-base leading-relaxed">
                  His professional experiences span the social sector, entrepreneurship, and consulting. He has
                  previously worked with organisations including Singhal Enterprises, Scholaride Consulting,
                  Pixstory, and Unschool. Alongside this, he has actively volunteered with NCC, NSS, Youth for
                  Seva, and TBWA, demonstrating his deep-rooted ethos of service and civic duty.
                </p>
                <p className="text-sm sm:text-base leading-relaxed">
                  Soubhik's approach blends grassroots insight with institutional thinking, combining innovation,
                  empathy, and strategic leadership. His commitment to nation-building through youth engagement
                  and social innovation continues to inspire a generation of emerging leaders and social
                  entrepreneurs.
                </p>
                <p className="text-sm sm:text-base leading-relaxed">
                  As the founder of the SWIS Foundation, Soubhik envisions building a next-generation impact
                  infrastructure for India – one that is powered by research, compassion, policy literacy, and
                  community leadership, with the long-term goal of fostering a more just, equitable, and inclusive
                  society.
                </p>
              </motion.div>
            </div>

            {/* Gallery Navigation */}
            <div className="relative">
              <div className="flex justify-center items-center">
                <motion.button
                  onClick={handlePrev}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="absolute left-0 sm:left-4 z-10 w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center text-white font-bold text-lg sm:text-xl shadow-lg transition-all duration-300 hover:shadow-xl"
                  style={{ backgroundColor: '#023080' }}
                >
                  ←
                </motion.button>
                
                <div className="flex gap-4 sm:gap-6 overflow-hidden max-w-xs sm:max-w-2xl lg:max-w-4xl mx-12 sm:mx-20">
                  {galleryImages.map((img, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      className="relative group"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-[#8e9fc5] to-[#04307b] rounded-xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                      <img
                        src={img}
                        alt={`Gallery ${i + 1}`}
                        className="relative w-48 sm:w-64 lg:w-80 h-32 sm:h-44 lg:h-56 object-cover rounded-xl shadow-md group-hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-1"
                      />
                    </motion.div>
                  ))}
                </div>
                
                <motion.button
                  onClick={handleNext}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="absolute right-0 sm:right-4 z-10 w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center text-white font-bold text-lg sm:text-xl shadow-lg transition-all duration-300 hover:shadow-xl"
                  style={{ backgroundColor: '#023080' }}
                >
                  →
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Memorable Speeches */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-16 sm:py-20 lg:py-24"
        style={{ backgroundColor: '#FCFDFF' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-12 lg:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-4 sm:mb-6" style={{ color: '#04307b' }}>
              Memorable Speeches
            </h2>
            <div className="w-24 h-1 mx-auto rounded-full mb-6 sm:mb-8" style={{ backgroundColor: '#023080' }}></div>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              A collection of memorable speeches by the Founder–Chairman that shed light on his persona and inspired scores of people to believe in their dreams
            </p>
          </motion.div>

          <div className="flex flex-col items-center gap-8 lg:gap-12">
            {/* Top awards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-3xl w-full">
              <motion.div
                initial={{ x: -40, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="backdrop-blur-sm bg-gradient-to-r from-[#d2d5e0] to-white/90 p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-[#8e9fc5]/20"
              >
                <p className="text-base sm:text-lg font-semibold mb-2" style={{ color: '#04307b' }}>Lifetime Achievement Award</p>
                <p className="text-sm sm:text-base" style={{ color: '#8e9fc5' }}>The Economic Times Awards</p>
              </motion.div>
              <motion.div
                initial={{ x: 40, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="backdrop-blur-sm bg-gradient-to-r from-[#d2d5e0] to-white/90 p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-[#8e9fc5]/20"
              >
                <p className="text-base sm:text-lg font-semibold mb-2" style={{ color: '#04307b' }}>Wharton Dean's Medal</p>
                <p className="text-sm sm:text-base" style={{ color: '#8e9fc5' }}>Wharton School, UPenn</p>
              </motion.div>
            </div>
            
            {/* Center image */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#8e9fc5] to-[#04307b] rounded-3xl blur-lg opacity-20 transform scale-110"></div>
              <motion.img
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.4 }}
                src={founderImage}
                alt="Chairman"
                className="relative w-48 sm:w-64 lg:w-80 h-60 sm:h-80 lg:h-96 object-cover rounded-3xl shadow-2xl border-4 border-white"
              />
            </motion.div>
            
            {/* Bottom awards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-3xl w-full">
              <motion.div
                initial={{ x: -40, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="backdrop-blur-sm bg-gradient-to-r from-[#d2d5e0] to-white/90 p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-[#8e9fc5]/20"
              >
                <p className="text-base sm:text-lg font-semibold mb-2" style={{ color: '#04307b' }}>Man of the Century Award</p>
                <p className="text-sm sm:text-base" style={{ color: '#8e9fc5' }}>Chemtech Foundation</p>
              </motion.div>
              <motion.div
                initial={{ x: 40, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="backdrop-blur-sm bg-gradient-to-r from-[#d2d5e0] to-white/90 p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-[#8e9fc5]/20"
              >
                <p className="text-base sm:text-lg font-semibold mb-2" style={{ color: '#04307b' }}>Civic Address & Reception</p>
                <p className="text-sm sm:text-base" style={{ color: '#8e9fc5' }}>Bombay Municipal Corp</p>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Shareholders' Speeches */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-16 sm:py-20 lg:py-24"
        style={{ backgroundColor: '#023080' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-light mb-12 lg:mb-16 text-white"
          >
            Speeches at Reliance Shareholders' Meetings
          </motion.h2>
          
          <div className="backdrop-blur-sm bg-white/95 rounded-3xl p-8 sm:p-12 lg:p-16 max-w-6xl mx-auto shadow-2xl border border-white/20">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {[
                { date: "APR 08, 2002", desc: "Equity Shareholders Meeting" },
                { date: "JUN 15, 2001", desc: "27th Annual General Meeting" },
                { date: "JUN 13, 2000", desc: "26th Annual General Meeting" },
                { date: "JUN 24, 1999", desc: "25th Annual General Meeting" },
                { date: "JUN 26, 1998", desc: "24th Annual General Meeting" },
                { date: "OCT 16, 1997", desc: "Extraordinary General Meeting" }
              ].map((speech, idx) => (
                <motion.div
                  key={idx}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: idx * 0.1, duration: 0.6 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="backdrop-blur-sm bg-gradient-to-br from-[#d2d5e0] to-white/90 p-6 sm:p-8 rounded-2xl text-center shadow-md hover:shadow-lg transition-all duration-300 border border-[#8e9fc5]/30"
                >
                  <p className="font-bold text-base sm:text-lg mb-3" style={{ color: '#04307b' }}>{speech.date}</p>
                  <p className="text-sm sm:text-base" style={{ color: '#8e9fc5' }}>{speech.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Awards */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-16 sm:py-20 lg:py-24"
        style={{ backgroundColor: '#d2d5e0' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-4 sm:mb-6" style={{ color: '#04307b' }}>
              Awards & Recognitions
            </h2>
            <div className="w-24 h-1 mx-auto rounded-full" style={{ backgroundColor: '#023080' }}></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {awardImages.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -10, scale: 1.03 }}
                className="relative group overflow-hidden rounded-2xl shadow-lg bg-white hover:shadow-2xl transition-all duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#8e9fc5] to-[#04307b] opacity-0 group-hover:opacity-20 transition-opacity duration-300 z-10"></div>
                <img
                  src={img}
                  alt={`Award ${i + 1}`}
                  className="w-full h-48 sm:h-56 lg:h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#023080]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-center pb-6 z-20">
                  <p className="text-white font-semibold text-base sm:text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    Award {i + 1}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default FounderChairman;
