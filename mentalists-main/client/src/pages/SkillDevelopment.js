"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
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
  CheckCircle,
} from "lucide-react"

const SkillDevelopment = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [countAnimated, setCountAnimated] = useState(false)
  const [activeProgram, setActiveProgram] = useState(0)
  const [selectedTimelineItem, setSelectedTimelineItem] = useState(0)
  const [whereWeWorkBgSlide, setWhereWeWorkBgSlide] = useState(0)

  // Timeline data for hero section
  const timelineData = [
    {
      year: "2015",
      percentage: "4.7%",
      description: "of workforce formally skilled",
      subtitle: "The Beginning",
      background:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
    },
    {
      year: "2020",
      percentage: "53%",
      description: "youth need reskilling by 2025",
      subtitle: "Growing Challenge",
      background:
        "https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
    },
    {
      year: "2024",
      percentage: "47%",
      description: "graduates not employable",
      subtitle: "Current Reality",
      background:
        "https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
    },
    {
      year: "2030",
      percentage: "15K+",
      description: "youth to be skilled annually",
      subtitle: "Our Vision",
      background:
        "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
    },
  ]

  // Programs data
  const programs = [
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Vocational Training & Livelihoods",
      description:
        "Nearly 30% of India's youth are NEET (Not in Education, Employment, or Training). We focus on skilling in locally relevant trades—tailoring, carpentry, beauty, plumbing—linked with job placement or self-employment.",
      features: [
        "Industry-relevant training",
        "Job placement assistance",
        "Self-employment support",
        "Local trade focus",
      ],
      color: "from-[#023080] to-[#04307b]",
    },
    {
      icon: <Laptop className="w-8 h-8" />,
      title: "Digital & Financial Literacy",
      description:
        "Over 70% of rural youth lack basic digital and financial skills. We bridge this gap through mobile-based learning, community tech hubs, and practical sessions.",
      features: ["Mobile-based learning", "Community tech hubs", "Financial literacy", "Digital skills training"],
      color: "from-[#8e9fc5] to-[#023080]",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Career Guidance & Life Skills",
      description:
        "Breaking cycles of poverty through awareness and role models. Our workshops cover communication, problem-solving, gender sensitivity, mental health, and career planning.",
      features: ["Communication skills", "Problem-solving", "Mental health support", "Career planning"],
      color: "from-[#d2d5e0] to-[#8e9fc5]",
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Entrepreneurship & Innovation Labs",
      description:
        "For youth in regions with limited job markets, we promote micro-entrepreneurship through seed funding, incubation support, and mentorship.",
      features: ["Seed funding", "Incubation support", "Mentorship programs", "Innovation labs"],
      color: "from-[#8e9fc5] to-[#023080]",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Internships & Mentorship",
      description:
        "Exposure is key. We partner with local businesses and global volunteers to offer guided internships and mentorship, helping youth build confidence and networks.",
      features: ["Global partnerships", "Guided internships", "Confidence building", "Network expansion"],
      color: "from-[#04307b] to-[#8e9fc5]",
    },
  ]

  // Statistics data
  const statisticsData = [
    {
      number: "47%",
      title: "of Indian graduates are not employable",
      subtitle: "due to lack of industry-relevant skills",
      source: "India Skills Report 2024",
      icon: <TrendingUp className="w-8 h-8" />,
    },
    {
      number: "53%",
      title: "of youth in India will require reskilling",
      subtitle: "by 2025 to meet industry demands",
      source: "World Economic Forum, 2020",
      icon: <Users className="w-8 h-8" />,
    },
    {
      number: "4.7%",
      title: "of the total workforce is formally skilled",
      subtitle: "compared to 52% in the US and 68% in the UK",
      source: "National Policy on Skill Development and Entrepreneurship 2015",
      icon: <Target className="w-8 h-8" />,
    },
  ]

  // Impact metrics
  const impactMetrics = [
    { number: 4000, suffix: "+", label: "Youth Impacted", icon: <Users className="w-6 h-6" /> },
    { number: 50, suffix: "+", label: "Trainers & Mentors", icon: <Award className="w-6 h-6" /> },
    { number: 7, suffix: "+", label: "Locations", icon: <MapPin className="w-6 h-6" /> },
    { number: 3, suffix: "+", label: "States", icon: <Globe className="w-6 h-6" /> },
  ]

  // Background images for Where We Work section
  const whereWeWorkBgImages = [
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
    "https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
    "https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
    "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
  ]

  // Animated counter component
  const AnimatedCounter = ({ end, duration = 2000, suffix = "" }) => {
    const [count, setCount] = useState(0)
    const [hasAnimated, setHasAnimated] = useState(false)
    const ref = useRef(null)

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true)
            let start = 0
            const increment = end / (duration / 16)
            const timer = setInterval(() => {
              start += increment
              if (start >= end) {
                setCount(end)
                clearInterval(timer)
              } else {
                setCount(start)
              }
            }, 16)
          }
        },
        { threshold: 0.1 },
      )

      if (ref.current) {
        observer.observe(ref.current)
      }

      return () => {
        if (ref.current) {
          observer.unobserve(ref.current)
        }
      }
    }, [end, duration, hasAnimated])

    const displayValue = end % 1 === 0 ? Math.floor(count) : count.toFixed(1)

    return (
      <span ref={ref}>
        {displayValue}
        {suffix}
      </span>
    )
  }

  // Background images for the Impact section
  const impactBackgroundImages = [
    "https://images.unsplash.com/photo-1505673544989-39f0e8e553c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    "https://images.unsplash.com/photo-1543157250-86f8c7510b16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    "https://images.unsplash.com/photo-1519389950473-47a04ca2a5e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
  ]

  const [currentBgIndex, setCurrentBgIndex] = useState(0)
  const bgImageRef = useRef(null)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentBgIndex((prevIndex) => (prevIndex + 1) % impactBackgroundImages.length)
    }, 5000) // Change image every 5 seconds

    return () => clearInterval(intervalId) // Cleanup interval on unmount
  }, [impactBackgroundImages.length])

  // Add useEffect for Where We Work background slideshow
  useEffect(() => {
    const timer = setInterval(() => {
      setWhereWeWorkBgSlide((prev) => (prev + 1) % whereWeWorkBgImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [whereWeWorkBgImages.length])

  return (
    <div className="bg-[#FCFDFF] overflow-hidden">
      {/* Hero Section with Timeline */}
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
            <h1 className="text-6xl font-serif mb-8">Skill Development</h1>
            <p className="text-2xl mb-12 max-w-3xl mx-auto">
              Skills for Tomorrow, <span className="text-blue-300 italic">Empowering India's Youth</span>
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
                "India faces a growing skill gap—over 65% of its population is under the age of 35, yet only a fraction are job-ready."}
              {selectedTimelineItem === 1 &&
                "The World Economic Forum predicts that over half of India's youth will need reskilling to meet future industry demands."}
              {selectedTimelineItem === 2 &&
                "Despite numerous schemes, less than 50% of graduates are considered employable due to lack of industry-relevant skills."}
              {selectedTimelineItem === 3 &&
                "Our vision is to enable 15,000+ young people annually by 2030 to access relevant skills and employment pathways."}
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

      {/* Challenge Overview Section */}
      <section className="py-24 bg-gradient-to-br from-[#FCFDFF] to-[#d2d5e0]/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl lg:text-6xl font-bold text-[#023080] mb-12">The Skill Gap Challenge</h2>
            <div className="max-w-5xl mx-auto">
              <p className="text-xl lg:text-2xl text-[#04307b]/90 leading-relaxed font-medium">
                India faces a growing skill gap—over 65% of its population is under the age of 35, yet only a fraction
                are job-ready. According to the India Skills Report 2024, less than 50% of graduates are considered
                employable. This gap is even wider in rural, tribal, and marginalized communities where access to
                training, mentorship, and opportunities is limited.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Rough Edge Image Section - Between Challenge and Statistics */}
      <div className="relative">
        <div
          className="absolute top-0 left-0 right-0 h-8"
          style={{
            backgroundColor: "#FCFDFF",
            clipPath:
              "polygon(0 0, 100% 0, 95% 100%, 85% 70%, 75% 100%, 65% 60%, 55% 100%, 45% 65%, 35% 100%, 25% 75%, 15% 100%, 5% 60%, 0 100%)",
          }}
        ></div>
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=400"
          alt="Youth learning and skill development"
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

      {/* Statistics About Skill Development in India Section - NEW SECTION */}
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
              Statistics About <span style={{ color: "#023080" }}>Skill Development</span> in India
            </h2>
            <p className="text-lg text-[#023080]/80 max-w-6xl mx-auto mb-16">
              Despite numerous government schemes and institutional efforts, the skill development landscape in India
              still faces major gaps. These numbers underline the urgent need for inclusive and accessible skilling
              pathways to prepare youth for the future of work.
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
                  <AnimatedCounter end={47} suffix="%" />
                </div>
                <div className="text-gray-700 mb-4 text-lg font-semibold">of Indian graduates are not employable</div>
                <div className="text-gray-600 mb-4">due to lack of industry-relevant skills</div>
                <div className="text-sm" style={{ color: "#023080" }}>
                  Source: India Skills Report 2024
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
                  <AnimatedCounter end={53} suffix="%" />
                </div>
                <div className="text-gray-700 mb-4 text-lg font-semibold">
                  of youth in India will require reskilling
                </div>
                <div className="text-gray-600 mb-4">by 2025 to meet industry demands</div>
                <div className="text-sm" style={{ color: "#023080" }}>
                  Source: World Economic Forum, 2020
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
                  <AnimatedCounter end={4.7} suffix="%" />
                </div>
                <div className="text-gray-700 mb-4 text-lg font-semibold">
                  of the total workforce is formally skilled
                </div>
                <div className="text-gray-600 mb-4">compared to 52% in the US and 68% in the UK</div>
                <div className="text-sm" style={{ color: "#023080" }}>
                  Source: National Policy on Skill Development and Entrepreneurship 2015
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Second Rough Edge Image Section - Between Statistics and Programs */}
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
          src="https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=400"
          alt="Skills training and development"
          className="w-full h-64 object-cover"
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-8"
          style={{
            backgroundColor: "#FCFDFF",
            clipPath:
              "polygon(0 100%, 100% 100%, 95% 0, 85% 30%, 75% 0, 65% 40%, 55% 0, 45% 35%, 35% 0, 25% 25%, 15% 0, 5% 40%, 0 0)",
          }}
        ></div>
      </div>

      {/* Programs Section */}
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
              Comprehensive programs designed to bridge the skill gap and create sustainable pathways to employment and
              entrepreneurship.
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
                    ? "bg-[#023080] text-white shadow-2xl"
                    : "bg-white text-[#04307b] hover:bg-[#d2d5e0]/30 shadow-lg hover:shadow-xl"
                }`}
              >
                {program.title.split("&")[0].trim()}
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
                  <div
                    className={`inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-r ${programs[activeProgram].color} text-white mb-8 shadow-lg`}
                  >
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

      {/* Where We Work - Updated with background slideshow */}
      <section className="py-24 bg-gradient-to-r from-[#023080] to-[#04307b] text-white relative overflow-hidden">
        {/* Background slideshow */}
        <div className="absolute inset-0 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.img
              key={whereWeWorkBgSlide}
              src={whereWeWorkBgImages[whereWeWorkBgSlide]}
              alt={`Where We Work Background ${whereWeWorkBgSlide + 1}`}
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
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-8">Where We Work</h2>
            <p className="text-xl text-[#d2d5e0]">Our grassroots-driven solutions reach communities across India</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-10 mb-20">
            {[
              {
                title: "Urban Areas",
                description: "Urban slums and marginalized communities",
                icon: <Users className="w-10 h-10" />,
              },
              {
                title: "Rural Areas",
                description: "Rural villages and farming communities",
                icon: <MapPin className="w-10 h-10" />,
              },
              {
                title: "Shelter Homes",
                description: "Supporting vulnerable youth in care",
                icon: <Globe className="w-10 h-10" />,
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

      {/* Impact Metrics */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 0.8,
          onComplete: () => setCountAnimated(true),
        }}
        viewport={{ once: true }}
        className="py-24 bg-white relative overflow-hidden"
      >
        {/* Background animation elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.img
            ref={bgImageRef}
            key={currentBgIndex}
            src={impactBackgroundImages[currentBgIndex]}
            alt="Impact Background"
            className="object-cover w-full h-full absolute top-0 left-0"
            style={{ filter: "brightness(50%) blur(3px)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}
          />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            className="absolute top-10 right-10 w-40 h-40 border border-white/10 rounded-full"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            className="absolute bottom-10 left-10 w-32 h-32 border border-white/10 rounded-full"
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-6xl font-bold text-[#023080] mb-8">Our Impact</h2>
            <p className="text-xl text-[#04307b]/80">Transforming lives across India through skill development</p>
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
                <div className="bg-gradient-to-br from-[#d2d5e0]/20 to-[#8e9fc5]/10 rounded-3xl p-10 hover:shadow-2xl transition-all duration-300 group border border-white/20">
                  <div className="text-[#023080] mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {metric.icon}
                  </div>
                  <div className="text-4xl lg:text-6xl font-bold mb-4 text-[#023080]">
                    <AnimatedCounter end={metric.number} suffix={metric.suffix} />
                  </div>
                  <div className="text-[#04307b]/80 text-lg">{metric.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Fourth Rough Edge Image Section */}
      <div className="relative">
        <div
          className="absolute top-0 left-0 right-0 h-8 bg-white"
          style={{
            clipPath:
              "polygon(0 0, 100% 0, 95% 100%, 85% 70%, 75% 100%, 65% 60%, 55% 100%, 45% 65%, 35% 100%, 25% 75%, 15% 100%, 5% 60%, 0 100%)",
          }}
        ></div>
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-LJsuMhx3i7f2wNllsRFy3WuY6JrXk8.png"
          alt="Children from communities we serve"
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

      {/* Combined Impact Goal & CTA Section */}
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
              15,000+
            </motion.div>
            <p className="text-lg lg:text-xl text-[#d2d5e0]/90 max-w-4xl mx-auto leading-relaxed mb-12">
              To enable 15,000+ young people annually by 2030 to access relevant skills, employment pathways, or start
              small businesses—especially those from underserved and vulnerable backgrounds.
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
              Be part of India's transformation. Help us bridge the skill gap.
            </motion.p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default SkillDevelopment
