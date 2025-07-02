import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Member = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Hero carousel images
  const heroImages = [
    "https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
  ];

  // Member data organized by teams
  const memberData = {
    "SWIS Mentorship Team": [
      {
        name: "Ms. Rubali Chakraborty",
        designation: "Ex-Paani Foundation | Ex-CIMA | Ex-Kotak Education Foundation",
        imageUrl: "https://images.unsplash.com/photo-1494790108755-2616b612b1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      },
      {
        name: "Mr. Samik Ghosh",
        designation: "Ex-CIFF | Ex-OxFam | Ex-IFPRI | Ex-Azim Premji Foundation",
        imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      },
      {
        name: "Ms. Khushboo Singh",
        designation: "Development Prof. | CSR Expert | Ex-CEEW | Ex-PSI",
        imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      },
      {
        name: "Dr. Sarmistha Basu Ghosh",
        designation: "Consultant and Thematic Expert in Teaching and Research",
        imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      },
    ],
    "SWIS Leadership Team": [
      {
        name: "Mr. Soubhik Kundu",
        designation: "Board Member - SWIS Institute | Life Member - IRCS | SXC",
        imageUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      },
      {
        name: "Ms. Tanya Garg",
        designation: "Board Member - SWIS Institute | IIM AI | UICET PU",
        imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      },
      {
        name: "Mr. Nakshatra Jagannath",
        designation: "Board Member - SWIS Institute | Head - CCAE | Ex-D. E. Shaw Group | SXC",
        imageUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      },
      {
        name: "Ms. Harshita Sharma",
        designation: "Board Member - SWIS Institute | Head - CSII | IIM BG | IGNOU | MH DU",
        imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      },
      {
        name: "Ms. Dikshitha Karahna",
        designation: "Board Member - SWIS Institute | Head - CSAA | SMU | Loyola Academy",
        imageUrl: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      },
    ],
    "SWIS Core Team": [
      {
        name: "Jiya Gudhaka",
        designation: "Core Team Member",
        imageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      },
      {
        name: "Vishal Maheto",
        designation: "Core Team Member",
        imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      },
      {
        name: "Manya Panjwani",
        designation: "Core Team Member",
        imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      },
      {
        name: "Pooja Lakshmi",
        designation: "Core Team Member",
        imageUrl: "https://images.unsplash.com/photo-1494790108755-2616b612b1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      },
      {
        name: "Tanushka MS",
        designation: "Core Team Member",
        imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      },
      {
        name: "Zoha Aza Khan",
        designation: "Core Team Member",
        imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      },
      {
        name: "Sulagna Ghosh",
        designation: "Core Team Member",
        imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      },
      {
        name: "Shristy Das",
        designation: "Core Team Member",
        imageUrl: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      },
      {
        name: "Mukund Agarwal",
        designation: "Core Team Member",
        imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      },
      {
        name: "K. Anitha Reddy",
        designation: "Core Team Member",
        imageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      },
      {
        name: "Advika S.",
        designation: "Core Team Member",
        imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      },
      {
        name: "Sanskriti",
        designation: "Core Team Member",
        imageUrl: "https://images.unsplash.com/photo-1494790108755-2616b612b1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      },
      {
        name: "Advika Yadav",
        designation: "Core Team Member",
        imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      },
    ],
    "SWIS Founding Supporters": [
      {
        name: "Anshul Mitra",
        designation: "Founding Supporter",
        imageUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      },
      {
        name: "Khusboo Singhal",
        designation: "Founding Supporter",
        imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      },
      {
        name: "Aryamaan Biswas",
        designation: "Founding Supporter",
        imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      },
      {
        name: "Vidhi Bhageria",
        designation: "Founding Supporter",
        imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      },
      {
        name: "Veda Rodewald",
        designation: "Founding Supporter",
        imageUrl: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      },
      {
        name: "Pritika Gupta",
        designation: "Founding Supporter",
        imageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      },
      {
        name: "Alisha Dash",
        designation: "Founding Supporter",
        imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      },
      {
        name: "Navya KS",
        designation: "Founding Supporter",
        imageUrl: "https://images.unsplash.com/photo-1494790108755-2616b612b1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      },
      {
        name: "Praniti Mishra",
        designation: "Founding Supporter",
        imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      },
      {
        name: "Abantika Chakraborty",
        designation: "Founding Supporter",
        imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      },
    ],
  };

  // Auto-slide for hero carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  return (
    <div className="bg-white">
      {/* Navigation Breadcrumb */}
      <nav className="bg-[#FCFDFF] py-4 px-6 lg:px-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center space-x-3 text-sm text-gray-600">
            <span className="hover:text-[#023080] cursor-pointer transition-colors">Home</span>
            <span>›</span>
            <span className="hover:text-[#023080] cursor-pointer transition-colors">About</span>
            <span>›</span>
            <span className="text-[#023080] font-medium">Board & Committee Members</span>
          </div>
        </div>
      </nav>

      {/* Hero Section with Slideshow */}
      <section className="relative h-screen overflow-hidden bg-gradient-to-br from-[#023080] via-[#04307b] to-[#8e9fc5]">
        {/* Hero Images */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <img
              src={heroImages[currentSlide]}
              alt={`Hero ${currentSlide + 1}`}
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#023080]/80 via-[#04307b]/60 to-transparent"></div>
          </motion.div>
        </AnimatePresence>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
            <div className="max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="mb-8"
              >
                <div className="text-right mb-4">
                  <span className="text-[#d2d5e0] text-lg font-light tracking-wide">SWIS Foundation</span>
                  <div className="text-[#8e9fc5] text-sm mt-1">Social Welfare & Impact Solutions</div>
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="text-4xl md:text-5xl lg:text-7xl font-light text-white mb-6 leading-tight"
              >
                Board & Committee
                <div className="bg-[#023080] inline-block px-4 md:px-6 py-2 mt-4">
                  <span className="text-[#d2d5e0] text-2xl md:text-3xl lg:text-4xl">Members</span>
                </div>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="text-lg md:text-xl text-[#d2d5e0] leading-relaxed max-w-3xl"
              >
                Meet the dedicated individuals who drive our mission forward through strategic leadership, 
                mentorship, and unwavering commitment to social change.
              </motion.p>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 rounded-full p-3 transition-all duration-300"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 rounded-full p-3 transition-all duration-300"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Member Sections */}
      {Object.entries(memberData).map(([teamName, members], sectionIndex) => (
        <section key={teamName} className={`py-16 lg:py-20 ${sectionIndex % 2 === 0 ? 'bg-[#F5F1E8]' : 'bg-white'}`}>
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#023080] mb-6">{teamName}</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#8e9fc5] to-[#04307b] rounded-full mx-auto"></div>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {members.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                    <div className="relative overflow-hidden h-96">
                      <img
                        src={member.imageUrl}
                        alt={member.name}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#023080]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-medium text-[#023080] mb-2 group-hover:text-[#04307b] transition-colors duration-300 leading-tight">
                        {member.name}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {member.designation}
                      </p>
                      <div className="w-12 h-1 bg-[#8e9fc5] rounded-full mt-4 group-hover:w-16 transition-all duration-300"></div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Footer CTA */}
      <section className="bg-gradient-to-r from-[#023080] to-[#04307b] py-16 lg:py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto px-6 lg:px-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-8">
            Join Our Mission
          </h2>
          <p className="text-lg md:text-xl text-[#d2d5e0] mb-8 leading-relaxed">
            Be part of our journey towards creating meaningful impact in communities across India.
            Together, we can build a better future for all.
          </p>
          <a href="/JoinUs" className="bg-[#8e9fc5] hover:bg-[#d2d5e0] text-[#023080] px-8 py-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 text-lg">
            Get Involved
          </a>
        </motion.div>
      </section>
    </div>
  );
};

export default Member;