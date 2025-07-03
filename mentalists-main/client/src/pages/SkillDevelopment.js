import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Users, 
  Target, 
  MapPin, 
  Laptop, 
  Lightbulb, 
  Briefcase, 
  TrendingUp,
  Award,
  Globe,
  ArrowRight,
  ChevronDown,
  CheckCircle,
  Zap
} from 'lucide-react';

const SkillDevelopment = () => {
  const [countAnimated, setCountAnimated] = useState(false);
  const [activeProgram, setActiveProgram] = useState(0);

  // Programs data
  const programs = [
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Vocational Training & Livelihoods",
      description: "Nearly 30% of India's youth are NEET (Not in Education, Employment, or Training). We focus on skilling in locally relevant trades—tailoring, carpentry, beauty, plumbing—linked with job placement or self-employment.",
      features: ["Industry-relevant training", "Job placement assistance", "Self-employment support", "Local trade focus"],
      color: "from-[#023080] to-[#04307b]"
    },
    {
      icon: <Laptop className="w-8 h-8" />,
      title: "Digital & Financial Literacy",
      description: "Over 70% of rural youth lack basic digital and financial skills. We bridge this gap through mobile-based learning, community tech hubs, and practical sessions.",
      features: ["Mobile-based learning", "Community tech hubs", "Financial literacy", "Digital skills training"],
      color: "from-[#8e9fc5] to-[#023080]"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Career Guidance & Life Skills",
      description: "Breaking cycles of poverty through awareness and role models. Our workshops cover communication, problem-solving, gender sensitivity, mental health, and career planning.",
      features: ["Communication skills", "Problem-solving", "Mental health support", "Career planning"],
      color: "from-[#d2d5e0] to-[#8e9fc5]"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Entrepreneurship & Innovation Labs",
      description: "For youth in regions with limited job markets, we promote micro-entrepreneurship through seed funding, incubation support, and mentorship.",
      features: ["Seed funding", "Incubation support", "Mentorship programs", "Innovation labs"],
      color: "from-[#8e9fc5] to-[#023080]"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Internships & Mentorship",
      description: "Exposure is key. We partner with local businesses and global volunteers to offer guided internships and mentorship, helping youth build confidence and networks.",
      features: ["Global partnerships", "Guided internships", "Confidence building", "Network expansion"],
      color: "from-[#04307b] to-[#8e9fc5]"
    }
  ];

  // Statistics data
  const statisticsData = [
    {
      number: "47%",
      title: "of Indian graduates are not employable",
      subtitle: "due to lack of industry-relevant skills",
      source: "India Skills Report 2024",
      icon: <TrendingUp className="w-8 h-8" />
    },
    {
      number: "53%",
      title: "of youth in India will require reskilling",
      subtitle: "by 2025 to meet industry demands",
      source: "World Economic Forum, 2020",
      icon: <Users className="w-8 h-8" />
    },
    {
      number: "4.7%",
      title: "of the total workforce is formally skilled",
      subtitle: "compared to 52% in the US and 68% in the UK",
      source: "National Policy on Skill Development and Entrepreneurship 2015",
      icon: <Target className="w-8 h-8" />
    }
  ];

  // Impact metrics
  const impactMetrics = [
    { number: 4000, suffix: "+", label: "Youth Impacted", icon: <Users className="w-6 h-6" /> },
    { number: 50, suffix: "+", label: "Trainers & Mentors", icon: <Award className="w-6 h-6" /> },
    { number: 7, suffix: "+", label: "Locations", icon: <MapPin className="w-6 h-6" /> },
    { number: 3, suffix: "+", label: "States", icon: <Globe className="w-6 h-6" /> }
  ];

  // Animated counter component
  const AnimatedCounter = ({ end, duration = 2000, suffix = "" }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!countAnimated) return;
      
      let start = 0;
      const increment = end / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }, [end, duration, countAnimated]);

    return <span>{count}{suffix}</span>;
  };

  return (
    <div className="bg-[#FCFDFF] overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src="/img/your-image.png" // Replace with the correct path to your uploaded image
            alt="Skill Development Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#023080]/95 via-[#04307b]/85 to-[#8e9fc5]/70"></div>
        </div>

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 5, 0]
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-20 right-20 w-32 h-32 bg-white/10 rounded-full blur-xl"
          />
          <motion.div
            animate={{ 
              y: [0, 30, 0],
              x: [0, -10, 0]
            }}
            transition={{ 
              duration: 12, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute bottom-32 left-16 w-24 h-24 bg-[#8e9fc5]/20 rounded-full blur-lg"
          />
        </div>

        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
                className="text-white"
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="mb-8"
                >
                  <span className="text-[#d2d5e0] text-lg font-medium tracking-wider uppercase">
                    SWIS FOUNDATION
                  </span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.7 }}
                  className="text-5xl lg:text-7xl font-bold mb-8 leading-tight"
                >
                  Statistics About Skill Development in India
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.4 }}
                  className="text-xl text-[#d2d5e0]/90 leading-relaxed mb-10 max-w-2xl"
                >
                  Despite numerous government schemes and institutional efforts, the skill development landscape in India still faces major gaps. These numbers underline the urgent need for inclusive and accessible skilling pathways to prepare youth for the future of work.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.6 }}
                  className="grid grid-cols-1 md:grid-cols-3 gap-6"
                >
                  {statisticsData.map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 1.8 + index * 0.2 }}
                      className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 text-center"
                    >
                      <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                      <div className="text-[#d2d5e0] text-sm">{stat.title}</div>
                      <div className="text-[#d2d5e0] text-xs">{stat.subtitle}</div>
                      <div className="text-xs text-[#d2d5e0] italic mt-2">Source: {stat.source}</div>
                    </motion.div>
                  ))}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 2.4 }}
                  className="flex justify-center lg:justify-start mt-10"
                >
                  <motion.a
                    href="/JoinUs"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-[#023080] px-12 py-5 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center gap-3 group"
                  >
                    Join Us
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
                  </motion.a>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2, delay: 0.8 }}
                className="text-center"
              >
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.0 }}
                  className="text-7xl lg:text-9xl font-bold text-[#d2d5e0] mb-6"
                >
                  15,000+
                </motion.div>
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                  className="text-3xl lg:text-5xl font-bold text-white mb-4"
                >
                  Our 2030 Vision
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.4 }}
                  className="text-xl text-[#d2d5e0]/90 leading-relaxed max-w-md mx-auto"
                >
                  To enable 15,000+ young people annually by 2030 to access relevant skills, employment pathways, or start small businesses—especially those from underserved and vulnerable backgrounds.
                </motion.p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          className="absolute bottom-12 right-12 text-white flex flex-col items-center gap-3"
        >
          <span className="text-sm font-medium">Scroll</span>
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          >
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </section>

      {/* Statistics Section (moved below hero) */}
      {/* ... (rest of the sections remain unchanged) ... */}

      {/* Programs Section */}
      <section className="py-24 bg-gradient-to-br from-[#d2d5e0]/20 to-[#8e9fc5]/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl lg:text-6xl font-bold text-[#023080] mb-8">
              Our Efforts Include
            </h2>
            <p className="text-xl text-[#04307b]/80 max-w-3xl mx-auto">
              Comprehensive programs designed to bridge the skill gap and create sustainable pathways to employment and entrepreneurship.
            </p>
          </motion.div>

          {/* Program Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {programs.map((program, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveProgram(index)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-8 py-4 rounded-2xl font-semibold transition-all duration-300 ${
                  activeProgram === index
                    ? 'bg-[#023080] text-white shadow-2xl'
                    : 'bg-white text-[#04307b] hover:bg-[#d2d5e0]/30 shadow-lg hover:shadow-xl'
                }`}
              >
                {program.title.split('&')[0].trim()}
              </motion.button>
            ))}
          </div>

          {/* Active Program Display */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProgram}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-3xl p-12 lg:p-16 shadow-2xl"
            >
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                  <div className={`inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-r ${programs[activeProgram].color} text-white mb-8 shadow-lg`}>
                    {programs[activeProgram].icon}
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-bold text-[#023080] mb-8">
                    {programs[activeProgram].title}
                  </h3>
                  <p className="text-lg text-[#04307b]/80 leading-relaxed mb-10">
                    {programs[activeProgram].description}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {programs[activeProgram].features.map((feature, index) => (
                      <motion.div 
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex items-center gap-4"
                      >
                        <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                        <span className="text-[#04307b] font-medium">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
                <div className="relative">
                  <motion.img
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    src={`https://images.unsplash.com/photo-${1550000000000 + activeProgram * 100000000}?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80`}
                    alt={programs[activeProgram].title}
                    className="rounded-3xl shadow-2xl"
                  />
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className={`absolute -top-6 -right-6 w-28 h-28 bg-gradient-to-r ${programs[activeProgram].color} rounded-full flex items-center justify-center text-white shadow-2xl`}
                  >
                    {programs[activeProgram].icon}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Impact Metrics */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ 
          duration: 0.8,
          onComplete: () => setCountAnimated(true)
        }}
        viewport={{ once: true }}
        className="py-24 bg-gradient-to-r from-[#023080] to-[#04307b] text-white relative overflow-hidden"
      >
        {/* Background animation elements */}
        <div className="absolute inset-0">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-10 right-10 w-40 h-40 border border-white/10 rounded-full"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-10 left-10 w-32 h-32 border border-white/10 rounded-full"
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-6xl font-bold mb-8">Our Impact</h2>
            <p className="text-xl text-[#d2d5e0]">Transforming lives across India through skill development</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
            {impactMetrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="text-center"
              >
                <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-10 hover:bg-white/20 transition-all duration-300 group border border-white/20">
                  <div className="text-[#d2d5e0] mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {metric.icon}
                  </div>
                  <div className="text-4xl lg:text-6xl font-bold mb-4">
                    <AnimatedCounter end={metric.number} suffix={metric.suffix} />
                  </div>
                  <div className="text-[#d2d5e0] text-lg">{metric.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Where We Work */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl lg:text-6xl font-bold text-[#023080] mb-8">
              Where We Work
            </h2>
            <p className="text-xl text-[#04307b]/80">
              Our grassroots-driven solutions reach communities across India
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-10 mb-20">
            {[
              { title: "Urban Areas", description: "Urban slums and marginalized communities", icon: <Users className="w-10 h-10" /> },
              { title: "Rural Areas", description: "Rural villages and farming communities", icon: <MapPin className="w-10 h-10" /> },
              { title: "Shelter Homes", description: "Supporting vulnerable youth in care", icon: <Globe className="w-10 h-10" /> }
            ].map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="bg-gradient-to-br from-[#d2d5e0]/20 to-[#8e9fc5]/10 rounded-3xl p-10 text-center hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="text-[#023080] mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {area.icon}
                </div>
                <h3 className="text-2xl font-bold text-[#023080] mb-4">{area.title}</h3>
                <p className="text-[#04307b]/80 text-lg">{area.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl lg:text-6xl font-bold text-[#023080] mb-10">
                The Challenge We Face
              </h2>
              <div className="space-y-8 text-lg text-[#04307b]/80 leading-relaxed">
                <p>
                  India faces a growing skill gap—over 65% of its population is under the age of 35, yet only a fraction 
                  are job-ready. According to the India Skills Report 2024, less than 50% of graduates are considered employable.
                </p>
                <p>
                  This gap is even wider in rural, tribal, and marginalized communities where access to training, 
                  mentorship, and opportunities is limited.
                </p>
                <p>
                  At SWIS, we believe that skills are the stepping stones to sustainable livelihoods and dignity. 
                  We work across urban slums, rural villages, tribal belts, and shelter homes to equip youth and 
                  adolescents with future-ready, relevant skills.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <motion.img
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Skills training"
                className="rounded-3xl shadow-2xl"
              />
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
                className="absolute -bottom-8 -right-8 bg-[#023080] text-white p-8 rounded-3xl shadow-2xl"
              >
                <Zap className="w-10 h-10 mb-3" />
                <div className="text-lg font-semibold">Future-Ready Skills</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#FCFDFF]">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-6xl font-bold text-[#023080] mb-10">
              Join Our Mission
            </h2>
            <p className="text-xl text-[#04307b]/80 mb-16 leading-relaxed">
              Be part of India's transformation. Help us bridge the skill gap and create sustainable 
              livelihoods for millions of young Indians.
            </p>
            <motion.a
              href="/JoinUs"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#023080] text-white px-12 py-6 rounded-2xl font-bold text-xl hover:bg-[#04307b] transition-all duration-300 transform hover:shadow-2xl flex items-center gap-4 justify-center mx-auto group"
            >
              Join Us
              <ArrowRight className="w-7 h-7 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SkillDevelopment;