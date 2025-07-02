import React, { useState, useEffect } from "react";
import { ArrowRight, ChevronDown, Globe, Target, Award, Users, TrendingUp, Lightbulb, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

// AnimatedCounter Component
const AnimatedCounter = ({ end, duration = 2000, suffix = "", countAnimated }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!countAnimated) return;

    let startTime = null;
    const startCount = 0;

    const animate = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      const currentCount = Math.floor(startCount + (end - startCount) * easeOutCubic);
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [countAnimated, end, duration]);

  return <span>{count.toLocaleString()}{suffix}</span>;
};

// HeroSection Component
const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      title: "Centre for Social Innovation & Impact",
      subtitle: "Driving Innovation for Impact",
      description: "Exclusive, honorary program designed for individuals committed to developing leadership skills and driving meaningful social change.",
      background: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
    },
    {
      title: "Leadership Development",
      subtitle: "Empowering Change Makers",
      description: "Transform communities through awareness and action with comprehensive leadership training.",
      background: "https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
    },
    {
      title: "Social Innovation",
      subtitle: "Creating Lasting Impact",
      description: "Building skills to manage time effectively, meet deadlines, and execute projects with innovation.",
      background: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const scrollToNextSection = () => {
    const nextSection = document.getElementById('objectives');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen overflow-hidden">
      <div className="absolute inset-0">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 slide-transition ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.background}
              alt="Hero background"
              className="w-full h-full object-cover transform transition-transform duration-[6000ms] ease-in-out scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#023080]/90 via-[#04307b]/70 to-[#8e9fc5]/50"></div>
          </div>
        ))}
      </div>

      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full">
          <div className="text-white max-w-4xl">
            <div className="mb-6 animate-fadeInUp">
              <span className="text-[#d2d5e0] text-lg font-light tracking-wide">SWIS FOUNDATION</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-light mb-6 leading-tight animate-fadeInUp stagger-1">
              {heroSlides[currentSlide].title}
              <div className="text-[#8e9fc5] text-2xl sm:text-3xl lg:text-4xl mt-2">
                {heroSlides[currentSlide].subtitle}
              </div>
            </h1>

            <p className="text-lg sm:text-xl text-[#d2d5e0] leading-relaxed mb-8 max-w-3xl animate-fadeInUp stagger-2">
              {heroSlides[currentSlide].description}
            </p>

            <div className="flex gap-4 flex-wrap animate-fadeInUp stagger-3">
              <a href="/JoinUs" className="bg-white text-[#023080] px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-[#FCFDFF] transition-all duration-300 transform hover:scale-105 flex items-center gap-2 text-sm sm:text-base">
                Apply Now <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>

      <button
        onClick={scrollToNextSection}
        className="absolute bottom-8 right-4 sm:right-8 text-white flex flex-col items-center gap-2 animate-float hover:text-[#d2d5e0] transition-colors duration-300 cursor-pointer group"
      >
        <span className="text-sm">Scroll</span>
        <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
      </button>
    </section>
  );
};

// ObjectivesSection Component
const ObjectivesSection = ({ isVisible }) => {
  const objectives = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Knowledge & Skills Development",
      description: "Equips students with knowledge and skills in social issues, policies, and interventions, while enhancing expertise in grant writing, CSR proposals, and impact measurement.",
      color: "from-[#023080] to-[#04307b]"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Civic Engagement & Empathy",
      description: "Through on-ground activities like volunteering and community visits, students develop responsibility and empathy, becoming compassionate changemakers.",
      color: "from-[#04307b] to-[#8e9fc5]"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Creative Thinking & Innovation",
      description: "Encouraging students to develop unique solutions for social challenges through brainstorming, design thinking, and innovative project ideas.",
      color: "from-[#8e9fc5] to-[#023080]"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Project Management",
      description: "Building skills to manage time effectively, meet deadlines, and execute projects with efficiency and organization.",
      color: "from-[#023080] to-[#8e9fc5]"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Institutions",
      description: "Collaborating with key institutions to enhance impact and outreach through strategic partnerships.",
      color: "from-[#04307b] to-[#023080]"
    }
  ];

  return (
    <section id="objectives" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className={`text-center mb-12 sm:mb-16 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#023080] mb-6">
            Objectives of this Initiative
          </h2>
          <p className="text-lg sm:text-xl text-[#04307b] max-w-3xl mx-auto">
            A comprehensive approach to fostering social leadership through education, empathy, and innovation.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {objectives.map((objective, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br from-[#FCFDFF] to-[#d2d5e0]/30 rounded-3xl p-6 sm:p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                isVisible ? `animate-scaleIn stagger-${index + 1}` : 'opacity-0'
              }`}
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${objective.color} text-white mb-6`}>
                {objective.icon}
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-[#023080] mb-4">{objective.title}</h3>
              <p className="text-[#04307b] leading-relaxed text-sm sm:text-base">{objective.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// MetricsSection Component
const MetricsSection = ({ isVisible, countAnimated }) => {
  const impactMetrics = [
    { number: 9, suffix: "", label: "States", icon: <Globe className="w-6 h-6" />, image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", size: "small" },
    { number: 3, suffix: "", label: "Centres", icon: <Target className="w-6 h-6" />, image: "https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", size: "small" },
    { number: 9, suffix: "", label: "Programs", icon: <Award className="w-6 h-6" />, image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", size: "small" },
    { number: 100, suffix: "K+", label: "Households served", icon: <Users className="w-6 h-6" />, image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", size: "large" },
    { number: 16, suffix: "K+", label: "Youth employed", icon: <TrendingUp className="w-6 h-6" />, image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", size: "large" },
    { number: 100, suffix: "+", label: "Nonprofits supported", icon: <Award className="w-6 h-6" />, image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", size: "small" },
    { number: 3, suffix: "", label: "Grand challenges launched", icon: <Lightbulb className="w-6 h-6" />, image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", size: "small" },
    { number: 4, suffix: "", label: "Annual convenings executed", icon: <Globe className="w-6 h-6" />, image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", size: "small" },
    { number: 29, suffix: "", label: "Senior leaders working with state governments", icon: <Users className="w-6 h-6" />, image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", size: "large" }
  ];

  return (
    <section id="metrics" className="py-20 bg-gradient-to-br from-[#FCFDFF] via-[#d2d5e0] to-[#8e9fc5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-6 text-[#023080] italic">Our Work in Numbers</h2>
          <p className="text-lg sm:text-xl text-[#04307b] max-w-3xl mx-auto">Driving impactful social change through measurable outcomes</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 auto-rows-fr">
          {impactMetrics.map((metric, index) => (
            <div
              key={index}
              className={`
                ${isVisible ? `animate-fadeInUp` : 'opacity-0'}
                ${metric.size === 'large' ? 'col-span-2 row-span-1' : 'col-span-1 row-span-1'}
                relative rounded-2xl overflow-hidden group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl
                h-32 sm:h-40
              `}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={metric.image}
                alt={metric.label}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#023080]/80 via-[#04307b]/70 to-[#8e9fc5]/60 group-hover:from-[#023080]/90 group-hover:via-[#04307b]/80 group-hover:to-[#8e9fc5]/70 transition-all duration-300"></div>

              <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-3 sm:p-4 text-center">
                <div className="text-white/80 mb-2 hidden sm:block">
                  {metric.icon}
                </div>
                <div className={`font-bold mb-1 sm:mb-2 ${metric.size === 'large' ? 'text-2xl sm:text-3xl lg:text-4xl' : 'text-xl sm:text-2xl lg:text-3xl'}`}>
                  <AnimatedCounter end={metric.number} suffix={metric.suffix} countAnimated={countAnimated} />
                </div>
                <div className={`text-white/90 font-medium leading-tight ${metric.size === 'large' ? 'text-sm sm:text-base' : 'text-xs sm:text-sm'}`}>
                  {metric.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// HighlightsSection Component
const HighlightsSection = ({ isVisible }) => {
  const [activeHighlight, setActiveHighlight] = useState(0);

  const keyHighlights = [
    {
      title: "Introduction to the Social Sector",
      description: "This provides a foundational understanding of the social sector, covering key issues, public policies, and interventions. They gain insights into the roles of NGOs, social enterprises, and government programs, helping them understand how various stakeholders drive social change.",
      features: ["Key issues education", "Policy insights", "Stakeholder roles"]
    },
    {
      title: "Talk Shows and Workshops",
      description: "Will focus on social issues, policies, and interventions, covering topics such as public policy, social entrepreneurship, advocacy, and impact measurement. These interactive sessions will enhance students' practical knowledge and critical thinking skills.",
      features: ["Interactive sessions", "Expert-led workshops", "Critical thinking"]
    },
    {
      title: "Action-Based Projects",
      description: "Students engage in hands-on projects addressing real-world social challenges. They develop skills in research, planning, execution, and impact assessment by working on live initiatives. This promotes practical problem-solving and encourages innovative solutions.",
      features: ["Hands-on projects", "Problem-solving", "Impact assessment"]
    },
    {
      title: "Field Visits",
      description: "By participating in volunteering, community visits, and fieldwork, students gain firsthand exposure to social issues. This experience fosters empathy, civic responsibility, and active citizenship, enabling them to become compassionate and socially conscious individuals.",
      features: ["Community engagement", "Empathy building", "Civic responsibility"]
    },
    {
      title: "Expert Engagement",
      description: "Through expert engagement, students gain insights into social issues, leadership strategies, and sector-specific skills. They connect with industry leaders through guest lectures and Q&A sessions, gaining valuable mentorship and networking opportunities.",
      features: ["Mentorship", "Networking", "Industry insights"]
    },
    {
      title: "Crowdfunding as a Lifeskill",
      description: "Teaches students to mobilize resources, market ideas, and raise funds for social causes. It enhances financial literacy, creativity, and persuasive communication. This empowers students to drive meaningful impact and develop social responsibility.",
      features: ["Fundraising skills", "Financial literacy", "Social impact"]
    }
  ];

  return (
    <section id="highlights" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className={`text-center mb-12 sm:mb-16 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#023080] mb-6">
            Key Highlights of the Initiative
          </h2>
          <p className="text-lg sm:text-xl text-[#04307b] max-w-3xl mx-auto">
            Comprehensive programs designed to develop social leadership and create sustainable community impact.
          </p>
        </div>

        <div className={`flex flex-wrap justify-center gap-2 mb-8 sm:mb-12 ${isVisible ? 'animate-fadeInUp stagger-1' : 'opacity-0'}`}>
          {keyHighlights.map((highlight, index) => (
            <button
              key={index}
              onClick={() => setActiveHighlight(index)}
              className={`px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                activeHighlight === index
                  ? 'bg-[#023080] text-white shadow-lg transform scale-105'
                  : 'bg-[#d2d5e0]/50 text-[#04307b] hover:bg-[#8e9fc5]/30'
              }`}
            >
              {highlight.title.split(' ')[0]}
            </button>
          ))}
        </div>

        <div
          key={activeHighlight}
          className={`bg-gradient-to-br from-[#FCFDFF] to-[#d2d5e0]/30 rounded-3xl p-6 sm:p-8 lg:p-12 ${
            isVisible ? 'animate-scaleIn' : 'opacity-0'
          }`}
        >
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-semibold text-[#023080] mb-6">
                {keyHighlights[activeHighlight].title}
              </h3>
              <p className="text-base sm:text-lg text-[#04307b] leading-relaxed mb-8">
                {keyHighlights[activeHighlight].description}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {keyHighlights[activeHighlight].features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#023080] rounded-full"></div>
                    <span className="text-[#04307b] text-sm sm:text-base">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src={`https://images.unsplash.com/photo-${1560000000000 + activeHighlight * 100000000}?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80`}
                alt={keyHighlights[activeHighlight].title}
                className="rounded-2xl shadow-xl w-full h-64 sm:h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// CTASection Component
const CTASection = ({ isVisible }) => {
  return (
    <section id="cta" className="py-16 sm:py-20 bg-gradient-to-r from-[#023080] to-[#04307b] text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
        <div className={isVisible ? 'animate-fadeInUp' : 'opacity-0'}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-8">
            Join Our Initiative
          </h2>
          <p className="text-lg sm:text-xl text-[#d2d5e0] mb-8 sm:mb-12 leading-relaxed">
            Be part of a transformative movement to create socially aware leaders who drive systemic change through innovation and impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/JoinUs" className="bg-white text-[#023080] px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-[#FCFDFF] transition-all duration-300 transform hover:scale-105 flex items-center gap-2 justify-center animate-pulse-slow">
              Apply Now <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

// Main CSII Component
const CSII = () => {
  const [isVisible, setIsVisible] = useState({
    objectives: false,
    metrics: false,
    highlights: false,
    cta: false
  });
  const [countAnimated, setCountAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
            if (entry.target.id === 'metrics') {
              setTimeout(() => setCountAnimated(true), 500);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[id]');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-white overflow-hidden">
      <style>{`
        @keyframes fadeInUp {
          from { transform: translateY(30px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes scaleIn {
          from { transform: scale(0.8); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        .slide-transition { transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1); }
        .animate-fadeInUp { animation: fadeInUp 0.8s ease-out forwards; }
        .animate-scaleIn { animation: scaleIn 0.6s ease-out forwards; }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse 2s ease-in-out infinite; }
        .stagger-1 { animation-delay: 0.1s; }
        .stagger-2 { animation-delay: 0.2s; }
        .stagger-3 { animation-delay: 0.3s; }
        .stagger-4 { animation-delay: 0.4s; }
      `}</style>

      <HeroSection />
      <ObjectivesSection isVisible={isVisible.objectives} />
      <MetricsSection isVisible={isVisible.metrics} countAnimated={countAnimated} />
      <HighlightsSection isVisible={isVisible.highlights} />
      <CTASection isVisible={isVisible.cta} />
    </div>
  );
};

export default CSII;