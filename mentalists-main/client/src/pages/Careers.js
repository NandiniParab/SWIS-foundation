import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Users, Award, Clock, Heart, Target, Globe } from 'lucide-react';

const Careers = () => {
  // Statistics data
  const stats = [
    { number: "300+", label: "Volunteers", icon: Users },
    { number: "150+", label: "Interns", icon: Award },
    { number: "20,000+", label: "Volunteer hours", icon: Clock },
    { number: "6,00,000+", label: "Cost saved", icon: Heart },
    { number: "20+", label: "Core members", icon: Target },
  ];

  // Centers data
  const centers = [
    {
      name: "CSII",
      title: "Center for Social Innovation & Impact",
      description: "Join us in co-creating a better future with passionate and bright minds who care about people and planet",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      applyLink: "/csii"
    },
    {
      name: "CSAA",
      title: "Center for Social Action & Advocacy",
      description: "Be part of our mission to create sustainable change through strategic social action and advocacy",
      image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      applyLink: "/csaa"
    },
    {
      name: "CCAE",
      title: "Center for Community & Educational Advancement",
      description: "Help us build stronger communities through education and empowerment initiatives",
      image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      applyLink: "/ccae"
    }
  ];

  return (
    <div className="bg-[#FCFDFF]">
      {/* Navigation Breadcrumb */}
      <nav className="bg-[#FCFDFF] py-3 sm:py-4 px-4 sm:px-6 lg:px-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center space-x-2 sm:space-x-3 text-xs sm:text-sm text-gray-600">
            <Link to="/" className="hover:text-[#023080] cursor-pointer transition-colors">Home</Link>
            <span>›</span>
            <span className="text-[#023080] font-medium">Careers</span>
          </div>
        </div>
      </nav>

      {/* Hero Section - Similar to Reliance layout */}
      <section className="relative min-h-screen bg-gradient-to-br from-[#023080] via-[#04307b] to-[#8e9fc5] overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        ></div>
        
        <div className="relative z-10 min-h-screen flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full">
            <div className="max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center"
              >
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-white mb-8 leading-tight">
                  Nurturing high performance
                </h1>
                <p className="text-2xl sm:text-3xl md:text-4xl text-[#d2d5e0] font-light">
                  with care and empathy
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Life at SWIS Section - Similar to second image layout */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#F5F1E8] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex-1 lg:pr-8"
            >
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-[#023080] mb-8">
                Life at SWIS
              </h2>
              
              <h3 className="text-xl sm:text-2xl text-[#8e9fc5] font-medium mb-8">
                Great people make great workplaces
              </h3>
              
              <div className="space-y-6 text-base sm:text-lg text-gray-700 leading-relaxed">
                <p>
                  SWIS was founded as an enterprise that cares. We are proud of our people and are 
                  focused on nurturing an environment that is inclusive, caring, safe, and highly 
                  productive for each member of our SWIS Family.
                </p>
                
                <p>
                  With the help of a robust, consistent, and meritocratic HR framework, SWIS 
                  continues to maintain a progressive people environment, where purpose-driven talent 
                  is attracted and engaged.
                </p>
              </div>
              
              <Link to="/">
                <button className="mt-8 border-2 border-[#8e9fc5] text-[#8e9fc5] px-8 py-3 rounded-full hover:bg-[#8e9fc5] hover:text-white transition-all duration-300 font-medium">
                  know more →
                </button>
              </Link>
            </motion.div>

            {/* Right Image Grid */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex-1 max-w-lg"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="relative h-48 rounded-2xl overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                      alt="Innovation"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-4 left-4 text-white font-medium">
                      Innovation
                    </div>
                  </div>
                  <div className="relative h-32 rounded-2xl overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                      alt="Diversity & Inclusion"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-2 left-3 text-white text-sm font-medium">
                      Diversity<br />& Inclusion
                    </div>
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="relative h-32 rounded-2xl overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                      alt="Recognition"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-2 left-3 text-white text-sm font-medium">
                      Recognition
                    </div>
                  </div>
                  <div className="relative h-48 rounded-2xl overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                      alt="Well-being"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-4 left-4 text-white font-medium">
                      Well-being
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quote Section - Similar to third image layout */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#F5F1E8] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Quote Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex-1 lg:pr-8"
            >
              <div className="text-6xl sm:text-7xl text-[#8e9fc5] font-serif mb-6">"</div>
              
              <blockquote className="text-xl sm:text-2xl md:text-3xl text-[#023080] font-light leading-relaxed mb-8">
                SWIS is more than a workplace...
                <br />
                It is a place for you to discover yourself more fully.
                <br />
                At SWIS, you should be able to experience more, acquire new skills, learn continuously, and apply all that learning to your own success and the success of this organisation.
                <br />
                We provide world-class facilities so that our people can work wholeheartedly.
              </blockquote>
              
              <div className="text-6xl sm:text-7xl text-[#8e9fc5] font-serif mb-8 text-right">"</div>
              
              <div className="mt-8">
                <div className="text-4xl sm:text-5xl md:text-6xl font-light text-[#023080] mb-2">
                  Soubhik
                </div>
                <div className="text-4xl sm:text-5xl md:text-6xl font-light text-[#023080]">
                  Kundu
                </div>
                <div className="text-base sm:text-lg text-gray-600 mt-4">
                  Chairman & Managing Trustee, SWIS
                </div>
              </div>
            </motion.div>

            {/* Portrait with circular design elements */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex-1 max-w-md lg:max-w-lg relative"
            >
              <div className="relative">
                {/* Large circular background */}
                <div className="absolute inset-0 w-96 h-96 border-2 border-[#d2d5e0] rounded-full opacity-30 transform translate-x-12 translate-y-12"></div>
                <div className="absolute inset-0 w-80 h-80 border-2 border-[#8e9fc5] rounded-full opacity-20 transform translate-x-20 translate-y-8"></div>
                
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Soubhik Kundu - Chairman & Managing Trustee"
                  className="relative z-10 w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#023080]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white mb-4">
              Total Workforce Strength
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 lg:gap-12">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center group"
                >
                  <div className="mb-4 flex justify-center">
                    <div className="w-16 h-16 bg-[#8e9fc5] rounded-full flex items-center justify-center group-hover:bg-[#d2d5e0] transition-colors duration-300">
                      <IconComponent className="w-8 h-8 text-[#023080]" />
                    </div>
                  </div>
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-light text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-base sm:text-lg text-[#d2d5e0]">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Apply Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#023080]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-white mb-6">
              Apply
            </h2>
            <p className="text-lg sm:text-xl text-[#d2d5e0] max-w-3xl mx-auto">
              Join us in co-creating a better future with passionate and bright minds who care about people and planet
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-8">
            {centers.slice(0, 3).map((center, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="aspect-[4/3] relative">
                  <img
                    src={center.image}
                    alt={center.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl sm:text-3xl font-light text-white mb-2">
                      {center.name}
                    </h3>
                    <p className="text-sm text-[#d2d5e0] mb-4 opacity-90">
                      {center.title}
                    </p>
                    
                    <Link to={center.applyLink}>
                      <button className="bg-transparent border-2 border-white text-white px-6 py-2 rounded-alive full hover:bg-white hover:text-[#023080] transition-all duration-300 text-sm font-medium">
                        apply now ↗
                      </button>
                    </Link>
                  </div>
                </div>
                </motion.div>
            ))}
          </div>

          {/* Additional Center - Full Width */}
          {centers.length > 3 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto"
            >
              <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <div className="aspect-[5/2] relative">
                  <img
                    src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                    alt="SWIS Foundation"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h3 className="text-3xl sm:text-4xl font-light text-white mb-3">
                      SWIS Foundation
                    </h3>
                    <p className="text-base text-[#d2d5e0] mb-6 max-w-lg">
                      Be part of our comprehensive mission to create lasting social impact through innovative solutions
                    </p>
                    
                    <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-[#023080] transition-all duration-300 font-medium">
                      apply now ↗
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Footer Note */}
      <section className="py-8 bg-[#FCFDFF] border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <p className="text-sm text-gray-600">
            In place of traditional departments, we operate through specialized centers: CSII, CSAA, and CCAE
          </p>
        </div>
      </section>
    </div>
  );
};

export default Careers;