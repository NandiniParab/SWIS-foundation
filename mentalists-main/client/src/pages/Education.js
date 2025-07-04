"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { BookOpen, Building, Users, Monitor, ArrowRight, Home, Mountain, Shield, CheckCircle } from "lucide-react"

// Counter animation component
const AnimatedCounter = ({ value, duration = 2 }) => {
  const [count, setCount] = useState(0)
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      let startTime
      const startValue = 0
      const endValue = value

      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime
        const progress = Math.min((currentTime - startTime) / (duration * 1000), 1)

        const easeOutQuart = 1 - Math.pow(1 - progress, 4)
        const currentCount = Math.floor(startValue + (endValue - startValue) * easeOutQuart)

        setCount(currentCount)

        if (progress < 1) {
          requestAnimationFrame(animate)
        }
      }

      requestAnimationFrame(animate)
    }
  }, [isInView, value, duration])

  return <span ref={ref}>{count}</span>
}

const Education = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [activeCard, setActiveCard] = useState(0)
  const [selectedTimelineItem, setSelectedTimelineItem] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [impactBgSlide, setImpactBgSlide] = useState(0)

  // Background images for the Impact Areas section
  const impactAreasBgImages = [
    "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
    "https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
    "https://images.unsplash.com/photo-1594736797933-d0d3085cf6dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
    "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
  ]

  // Timeline data
  const timelineData = [
    {
      year: "1947",
      percentage: "88%",
      description: "of India was uneducated",
      subtitle: "Independence Era",
      background: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&h=600&fit=crop",
    },
    {
      year: "2005",
      percentage: "40%",
      description: "of India was uneducated",
      subtitle: "Progress Made",
      background: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=600&fit=crop",
    },
    {
      year: "2015",
      percentage: "27%",
      description: "of India was uneducated",
      subtitle: "Continued Growth",
      background: "https://images.unsplash.com/photo-1594736797933-d0d3085cf6dd?w=800&h=600&fit=crop",
    },
    {
      year: "2024",
      percentage: "20%",
      description: "of India was uneducated",
      subtitle: "Current Reality",
      background: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&h=600&fit=crop",
    },
  ]

  // Programs data - Updated to match skill development structure
  const programData = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Quality Education",
      fullTitle: "Providing Quality Education",
      description:
        "Over 50% of children in India can't read simple text by age 10 (World Bank, 2022), reflecting a deep learning crisis in basic education.",
      features: [
        "Remedial learning programs",
        "Reading comprehension",
        "Basic numeracy skills",
        "Learning assessments",
      ],
      color: "from-[#023080] to-[#04307b]",
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "Infrastructure",
      fullTitle: "Improving School Infrastructure",
      description:
        "Only 38.5% of schools have all basic facilities like electricity, toilets, drinking water, and boundary walls (UDISE+ 2022–23).",
      features: [
        "Basic facilities setup",
        "Safe learning environment",
        "Accessibility improvements",
        "Resource centers",
      ],
      color: "from-[#8e9fc5] to-[#023080]",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Teacher Training",
      fullTitle: "Training Community Teachers",
      description:
        "More than 11% of elementary-level teachers remain untrained, and many face poor student-teacher ratios exceeding 50:1 in some states.",
      features: ["Professional development", "Teaching methodologies", "Classroom management", "Student engagement"],
      color: "from-[#d2d5e0] to-[#8e9fc5]",
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Digital Classrooms",
      fullTitle: "Setting Up Digital Classrooms & Libraries",
      description:
        "Less than 30% of schools have internet access, and only 32% have a functional library, widening the learning gap in underserved areas.",
      features: ["Digital learning tools", "Internet connectivity", "Library resources", "Technology training"],
      color: "from-[#8e9fc5] to-[#023080]",
    },
  ]

  // Slideshow images
  const slideImages = [
    "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1594736797933-d0d3085cf6dd?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&h=600&fit=crop",
  ]

  // Impact areas data
  const impactAreas = [
    {
      icon: Home,
      title: "Urban slums",
      image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=400&h=300&fit=crop",
      bgColor: "#023080",
    },
    {
      icon: Mountain,
      title: "Rural villages",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=300&fit=crop",
      bgColor: "#8e9fc5",
    },
    {
      icon: Shield,
      title: "Shelter homes",
      image: "https://images.unsplash.com/photo-1594736797933-d0d3085cf6dd?w=400&h=300&fit=crop",
      bgColor: "#d2d5e0",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideImages.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [slideImages.length])

  useEffect(() => {
    const timer = setInterval(() => {
      setImpactBgSlide((prev) => (prev + 1) % impactAreasBgImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [impactAreasBgImages.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slideImages.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slideImages.length) % slideImages.length)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Timeline Background - Updated to match Skill Development */}
      <section
        className="relative min-h-screen flex items-center justify-center pt-20"
        style={{
          backgroundImage: `url("${timelineData[selectedTimelineItem].background}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white pt-32 pb-16">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8"
            >
              <span className="text-[#d2d5e0] text-lg font-medium tracking-wider uppercase">SWIS FOUNDATION</span>
            </motion.div>
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
                    selectedTimelineItem === index
                      ? "bg-white bg-opacity-20 scale-110"
                      : "hover:bg-white hover:bg-opacity-10"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="text-4xl font-bold" style={{ color: "#FCFDFF" }}>
                    {item.year}
                  </div>
                  <div
                    className={`w-6 h-6 rounded-full my-3 ${selectedTimelineItem === index ? "bg-white" : "bg-white bg-opacity-50"}`}
                  ></div>
                  <div
                    className="text-3xl font-bold"
                    style={{ color: "#023080", backgroundColor: "#FCFDFF", padding: "8px 16px", borderRadius: "8px" }}
                  >
                    {item.percentage}
                  </div>
                  <div className="text-sm mt-3 text-center max-w-32">{item.description}</div>
                  <div className="text-xs mt-2 text-[#d2d5e0] font-medium">{item.subtitle}</div>
                </motion.button>
              </div>
            ))}
          </motion.div>

          {/* Hero description based on selected timeline */}
          <motion.div
            key={selectedTimelineItem}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-16 max-w-4xl mx-auto"
          >
            <p className="text-xl text-[#d2d5e0]/90 leading-relaxed">
              {selectedTimelineItem === 0 &&
                "At independence, India faced massive educational challenges with nearly 9 out of 10 people lacking basic literacy."}
              {selectedTimelineItem === 1 &&
                "Significant progress was made through various educational initiatives and government programs."}
              {selectedTimelineItem === 2 &&
                "Continued efforts brought down illiteracy rates, but quality education remained a challenge."}
              {selectedTimelineItem === 3 &&
                "Today, while literacy has improved, learning outcomes and quality education access remain critical issues."}
            </p>
          </motion.div>

          {/* CTA Button - Updated: moved up and reduced size */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex justify-center mt-4"
          >
            <motion.a
              href="/JoinUs"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-[#023080] px-10 py-4 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center gap-3 group"
            >
              Join Us
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Main Content Section - Removed second paragraph */}
      <section className="py-24 bg-gradient-to-br from-[#FCFDFF] to-[#d2d5e0]/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-xl lg:text-2xl text-[#04307b]/90 leading-relaxed font-medium max-w-5xl mx-auto">
              India is home to over 250 million school-going children, the largest in the world. Yet, the ASER 2023
              report reveals that over 60% of Class 5 students in rural India cannot read a Class 2-level textbook.
              Dropout rates remain alarmingly high, especially among marginalized communities and girls.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Rough Edge Image Section */}
      <div className="relative">
        <div
          className="absolute top-0 left-0 right-0 h-8 bg-white"
          style={{
            clipPath:
              "polygon(0 0, 100% 0, 95% 100%, 85% 70%, 75% 100%, 65% 60%, 55% 100%, 45% 65%, 35% 100%, 25% 75%, 15% 100%, 5% 60%, 0 100%)",
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
            backgroundColor: "#8e9fc5",
            clipPath:
              "polygon(0 100%, 100% 100%, 95% 0, 85% 30%, 75% 0, 65% 40%, 55% 0, 45% 35%, 35% 0, 25% 25%, 15% 0, 5% 40%, 0 0)",
          }}
        ></div>
      </div>

      {/* Statistics About Child Education in India Section - Moved here */}
      <section className="py-24 bg-gradient-to-br from-[#8e9fc5] to-[#d2d5e0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold mb-8">
              Statistics About <span style={{ color: "#023080" }}>Child Education</span> in India
            </h2>
            <p className="text-lg text-[#023080]/80 max-w-6xl mx-auto mb-16">
              Despite progress made in recent years and a large number of NGOs working for education in India, the below
              numbers highlight the urgent need to provide help for the education of children. Children are the building
              blocks of our nation, their future depends on us.
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
                <div className="text-7xl font-bold mb-4" style={{ color: "#023080" }}>
                  <AnimatedCounter value={46} />
                </div>
                <div className="text-2xl font-bold mb-4" style={{ color: "#023080" }}>
                  million
                </div>
                <div className="text-gray-700 mb-4">children, between 6-18 years of age, do not go to school</div>
                <div className="text-sm text-gray-500">
                  <div style={{ color: "#023080" }}>Estimate: RGI Census</div>
                  <div style={{ color: "#023080" }}>Population Projection 2016</div>
                  <div style={{ color: "#023080" }}>and UDISE 2016-17</div>
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
                <div className="text-7xl font-bold mb-4" style={{ color: "#023080" }}>
                  <AnimatedCounter value={33} />
                </div>
                <div className="text-2xl font-bold mb-4" style={{ color: "#023080" }}>
                  million
                </div>
                <div className="text-gray-700 mb-4">child labourers go to work instead of school</div>
                <div className="text-sm" style={{ color: "#023080" }}>
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
                <div className="text-7xl font-bold mb-4" style={{ color: "#023080" }}>
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

      {/* Second Rough Edge Image Section */}
      <div className="relative">
        <div
          className="absolute top-0 left-0 right-0 h-8 bg-white"
          style={{
            clipPath:
              "polygon(0 0, 100% 0, 95% 100%, 85% 70%, 75% 100%, 65% 60%, 55% 100%, 45% 65%, 35% 100%, 25% 75%, 15% 100%, 5% 60%, 0 100%)",
          }}
        ></div>
        <img
          src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1920&h=400&fit=crop"
          alt="Children learning"
          className="w-full h-64 object-cover"
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-8"
          style={{
            backgroundColor: "#023080",
            clipPath:
              "polygon(0 100%, 100% 100%, 95% 0, 85% 30%, 75% 0, 65% 40%, 55% 0, 45% 35%, 35% 0, 25% 25%, 15% 0, 5% 40%, 0 0)",
          }}
        ></div>
      </div>

      {/* Our Efforts Include Section - Updated to match Skill Development */}
      <section className="py-24 bg-gradient-to-br from-[#FCFDFF] to-[#d2d5e0]/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl lg:text-6xl font-bold text-[#023080] mb-8">Our Efforts Include</h2>
            <p className="text-xl text-[#04307b]/80 max-w-3xl mx-auto">
              At SWIS, we believe that education is the foundation of empowerment. We work with government schools,
              shelter homes, and community learning centers to ensure every child, regardless of background, has access
              to quality, inclusive education. Our efforts include:
            </p>
          </motion.div>

          {/* Program Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {programData.map((program, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveCard(index)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-8 py-4 rounded-2xl font-semibold transition-all duration-300 ${
                  activeCard === index
                    ? "bg-[#023080] text-white shadow-2xl"
                    : "bg-white text-[#04307b] hover:bg-[#d2d5e0]/30 shadow-lg hover:shadow-xl"
                }`}
              >
                {program.title}
              </motion.button>
            ))}
          </div>

          {/* Active Program Display */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCard}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-3xl p-12 lg:p-16 shadow-2xl"
            >
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                  <div
                    className={`inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-r ${programData[activeCard].color} text-white mb-8 shadow-lg`}
                  >
                    {programData[activeCard].icon}
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-bold text-[#023080] mb-8">
                    {programData[activeCard].fullTitle}
                  </h3>
                  <p className="text-lg text-[#04307b]/80 leading-relaxed mb-10">
                    {programData[activeCard].description}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {programData[activeCard].features.map((feature, index) => (
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
                    src={`https://images.unsplash.com/photo-${1550000000000 + activeCard * 100000000}?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80`}
                    alt={programData[activeCard].title}
                    className="rounded-3xl shadow-2xl"
                  />
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className={`absolute -top-6 -right-6 w-28 h-28 bg-gradient-to-r ${programData[activeCard].color} rounded-full flex items-center justify-center text-white shadow-2xl`}
                  >
                    {programData[activeCard].icon}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Our Impact Areas - Updated to match Skill Development "Where We Work" */}
      <section className="py-24 bg-gradient-to-r from-[#023080] to-[#04307b] text-white relative overflow-hidden">
        {/* Background slideshow */}
        <div className="absolute inset-0 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.img
              key={impactBgSlide}
              src={impactAreasBgImages[impactBgSlide]}
              alt={`Impact Background ${impactBgSlide + 1}`}
              className="absolute inset-0 w-full h-full object-cover object-center"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 1.5 }}
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-8">Our Impact Areas</h2>
            <p className="text-xl text-[#d2d5e0]">Reaching children across diverse communities and environments</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-10 mb-20">
            {[
              {
                title: "Urban Slums",
                description: "Supporting children in urban slums and marginalized city communities",
                icon: <Home className="w-10 h-10" />,
              },
              {
                title: "Rural Villages",
                description: "Bringing quality education to remote rural areas and farming communities",
                icon: <Mountain className="w-10 h-10" />,
              },
              {
                title: "Shelter Homes",
                description: "Providing educational support to vulnerable children in care facilities",
                icon: <Shield className="w-10 h-10" />,
              },
            ].map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="bg-white/10 backdrop-blur-lg rounded-3xl p-10 text-center hover:bg-white/20 transition-all duration-300 group"
              >
                <div className="text-[#d2d5e0] mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {area.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{area.title}</h3>
                <p className="text-[#d2d5e0]/90 text-lg">{area.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Impact Section - Removed background slideshow */}
      <section className="py-24 bg-gradient-to-br from-[#8e9fc5] to-[#d2d5e0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16 text-[#023080]"
          >
            Our Impact
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg text-center hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-5xl font-bold mb-4" style={{ color: "#023080" }}>
                <AnimatedCounter value={5} />+
              </div>
              <div className="text-xl text-gray-700">Locations</div>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg text-center hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-5xl font-bold mb-4" style={{ color: "#023080" }}>
                <AnimatedCounter value={8} />+
              </div>
              <div className="text-xl text-gray-700">Partnered Learning Centres</div>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg text-center hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="text-5xl font-bold mb-4" style={{ color: "#023080" }}>
                <AnimatedCounter value={40} />+
              </div>
              <div className="text-xl text-gray-700">Teachers</div>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg text-center hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="text-5xl font-bold mb-4" style={{ color: "#023080" }}>
                <AnimatedCounter value={2000} />+
              </div>
              <div className="text-xl text-gray-700">Beneficiaries</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Fifth Rough Edge Image Section */}
      <div className="relative">
        <div
          className="absolute top-0 left-0 right-0 h-8"
          style={{
            backgroundColor: "#d2d5e0",
            clipPath:
              "polygon(0 0, 100% 0, 95% 100%, 85% 70%, 75% 100%, 65% 60%, 55% 100%, 45% 65%, 35% 100%, 25% 75%, 15% 100%, 5% 60%, 0 100%)",
          }}
        ></div>
        <img
          src="https://images.unsplash.com/photo-1577896851231-70ef18881754?w=1920&h=400&fit=crop"
          alt="Children achieving goals"
          className="w-full h-64 object-cover"
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-8"
          style={{
            backgroundColor: "#04307b",
            clipPath:
              "polygon(0 100%, 100% 100%, 95% 0, 85% 30%, 75% 0, 65% 40%, 55% 0, 45% 35%, 35% 0, 25% 25%, 15% 0, 5% 40%, 0 0)",
          }}
        ></div>
      </div>

      {/* Impact Goal Section - Updated to match Skill Development "Our Vision" */}
      <section className="py-24 bg-gradient-to-br from-[#04307b] to-[#023080] text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }}
            transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
            className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#8e9fc5]/20 to-transparent"
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl lg:text-5xl font-bold mb-8">Our 2030 Vision</h2>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-5xl lg:text-7xl font-bold text-[#d2d5e0] mb-8"
            >
              10,000+
            </motion.div>
            <p className="text-lg lg:text-xl text-[#d2d5e0]/90 max-w-4xl mx-auto leading-relaxed mb-12">
              Enable a capacity to impact 10,000+ children annually by 2030 to access and complete basic education,
              especially in underserved regions.
            </p>

            {/* Join Mission Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <motion.a
                href="/JoinUs"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-[#023080] px-10 py-4 rounded-2xl font-bold text-lg hover:bg-[#d2d5e0] transition-all duration-300 transform hover:shadow-2xl inline-flex items-center gap-3 group"
              >
                Join Our Mission
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.a>
            </motion.div>

            {/* Short tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              viewport={{ once: true }}
              className="text-[#d2d5e0]/80 text-sm"
            >
              Be part of India's transformation. Help us build an educated nation.
            </motion.p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Education
