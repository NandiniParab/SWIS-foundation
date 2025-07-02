import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronDown, Globe, Target, Award, Users, TrendingUp, Lightbulb, Zap, Play, Shield } from 'lucide-react';

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
      title: "Centre for Civil Administration & Engagement",
      subtitle: "Building Civic Leaders",
      description: "Fostering civic consciousness through fellowships, structured volunteering, and real-world exposure to public systems.",
      background: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
    },
    {
      title: "Civil Administrative Fellowship",
      subtitle: "Democracy in Action",
      description: "Exclusive, honorary program designed for individuals committed to developing leadership skills and driving meaningful social change.",
      background: "https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
    },
    {
      title: "Public Engagement",
      subtitle: "Ethical Leadership",
      description: "Transforming idealism into public leadership through mentorship, training, and field experiences with governance bodies.",
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
    const nextSection = document.getElementById('mission');
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

// MissionSection Component
const MissionSection = ({ isVisible }) => {
  const missionCards = [
    {
      title: "Democratic Engagement",
      content: "At SWIS, we believe that democracy thrives when citizens are engaged and informed. The Centre for Civil Administration & Engagement is our initiative to build civic consciousness through fellowships, structured volunteering, and real-world exposure to public systems.",
      icon: <Users className="w-8 h-8" />,
      delay: "stagger-1"
    },
    {
      title: "Ethical Leadership",
      content: "By placing young citizens in the heart of governance and community action, CCAE nurtures a new culture of ethical public engagement. Our goal is to create a generation that doesn't just demand change—but knows how to deliver it.",
      icon: <Target className="w-8 h-8" />,
      delay: "stagger-2"
    },
    {
      title: "Transformative Impact",
      content: "Through mentorship, training, and field experiences with local government bodies and civil society partners, CCAE transforms idealism into public leadership. Every program we run is an investment in participatory democracy and responsive governance.",
      icon: <Award className="w-8 h-8" />,
      delay: "stagger-3"
    }
  ];

  return (
    <section id="mission" className="py-16 sm:py-20 bg-gradient-to-br from-[#FCFDFF] via-[#d2d5e0]/30 to-[#8e9fc5]/20 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-48 sm:w-72 h-48 sm:h-72 bg-[#8e9fc5]/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-[#023080]/5 rounded-full translate-x-1/2 translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className={`text-center mb-12 sm:mb-16 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
          <div className="inline-block mb-6">
            <span className="bg-[#8e9fc5]/20 text-[#023080] px-4 py-2 rounded-full text-sm font-medium">
              Our Purpose
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-light text-[#023080] mb-8 bg-gradient-to-r from-[#023080] to-[#04307b] bg-clip-text text-transparent">
            Our Mission
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {missionCards.map((item, index) => (
            <div
              key={index}
              className={`bg-white/80 backdrop-blur-sm rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 ${
                isVisible ? `animate-fadeInUp ${item.delay}` : 'opacity-0'
              }`}
            >
              <div className="text-[#023080] mb-6 flex justify-center">
                <div className="bg-gradient-to-br from-[#8e9fc5]/20 to-[#d2d5e0]/30 p-4 rounded-2xl">
                  {item.icon}
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-[#023080] mb-4 text-center">
                {item.title}
              </h3>
              <p className="text-[#04307b] leading-relaxed text-center text-sm sm:text-base">
                {item.content}
              </p>
            </div>
          ))}
        </div>

        <div className={`text-center ${isVisible ? 'animate-fadeInUp stagger-4' : 'opacity-0'}`}>
          <div className="bg-gradient-to-r from-[#023080] to-[#04307b] text-white rounded-3xl p-6 sm:p-8 lg:p-12 shadow-2xl">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-6">
              Join the Movement for Democratic Change
            </h3>
            <p className="text-lg sm:text-xl text-[#d2d5e0] mb-8 max-w-3xl mx-auto">
              Every citizen has the power to shape their community's future. Through CCAE, we're building the bridge between civic awareness and meaningful action.
            </p>
            <a href="/JoinUs" className="bg-white text-[#023080] px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-[#FCFDFF] transition-all duration-300 transform hover:scale-105">
              Start Your Journey
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

// ObjectivesSection Component
const ObjectivesSection = ({ isVisible }) => {
  const objectives = [
    {
      to: "/JoinUs",
      icon: <Target className="w-8 h-8" />,
      title: "Awareness",
      description: "To raise awareness about the development sector and foster understanding of civic responsibilities.",
      color: "from-[#023080] to-[#04307b]"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Networking",
      description: "To network with institutions, development professionals, organizations and governments.",
      color: "from-[#04307b] to-[#8e9fc5]"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Capacity Building",
      description: "To build the capacities of youth through structured processes and civic engagement programs.",
      color: "from-[#8e9fc5] to-[#023080]"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Leadership Skills",
      description: "Develop the expertise and leadership skills necessary to lead impactful civic initiatives.",
      color: "from-[#023080] to-[#8e9fc5]"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Skill Building",
      description: "To develop learning publications and skill-building resources for civic engagement.",
      color: "from-[#04307b] to-[#023080]"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Social Leaders",
      description: "To create a community pool of social-empathetic leaders committed to public service.",
      color: "from-[#8e9fc5] to-[#04307b]"
    }
  ];

  return (
    <section id="objectives" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className={`text-center mb-12 sm:mb-16 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#023080] mb-6">
            Objectives of this Fellowship
          </h2>
          <p className="text-lg sm:text-xl text-[#04307b] max-w-3xl mx-auto">
            Comprehensive approach to building civic leadership and fostering democratic participation through structured programs.
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
    { number: 100, suffix: "K+", label: "Households served", icon: <Users className="w-6 h-6" />, image: "https://images.unsplash.com/photo-1594736797933-d0d4ffd9d6ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", size: "large" },
    { number: 16, suffix: "K+", label: "Youth employed", icon: <TrendingUp className="w-6 h-6" />, image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", size: "medium" },
    { number: 100, suffix: "+", label: "Nonprofits supported", icon: <Lightbulb className="w-6 h-6" />, image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", size: "medium" },
    { number: 3, suffix: "", label: "Grand challenges launched", icon: <Zap className="w-6 h-6" />, image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", size: "small" },
    { number: 4, suffix: "", label: "Annual convenings executed", icon: <Play className="w-6 h-6" />, image: "https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", size: "medium" },
    { number: 29, suffix: "", label: "Senior leaders working with state governments", icon: <Shield className="w-6 h-6" />, image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", size: "large" }
  ];

  return (
    <section id="metrics" className="py-20 bg-gradient-to-br from-[#FCFDFF] via-[#d2d5e0] to-[#8e9fc5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-6 text-[#023080] italic">Our work in numbers</h2>
          <p className="text-lg sm:text-xl text-[#04307b] max-w-3xl mx-auto">Building civic engagement through measurable impact across communities</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 lg:gap-6 auto-rows-fr">
          {impactMetrics.map((metric, index) => (
            <div
              key={index}
              className={`
                ${isVisible ? `animate-fadeInUp` : 'opacity-0'}
                ${metric.size === 'large' ? 'col-span-2 row-span-2' : ''}
                ${metric.size === 'medium' ? 'col-span-1 row-span-2 sm:col-span-2 sm:row-span-1' : ''}
                ${metric.size === 'small' ? 'col-span-1 row-span-1' : ''}
                relative rounded-2xl overflow-hidden group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl
                ${index < 3 ? 'h-32 sm:h-40' : ''}
                ${index >= 3 && index < 5 ? 'h-40 sm:h-48' : ''}
                ${index >= 5 ? 'h-32 sm:h-40' : ''}
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
                <div className={`font-bold mb-1 sm:mb-2 ${metric.size === 'large' ? 'text-4xl sm:text-5xl lg:text-6xl' : metric.size === 'medium' ? 'text-2xl sm:text-3xl lg:text-4xl' : 'text-xl sm:text-2xl lg:text-3xl'}`}>
                  <AnimatedCounter end={metric.number} suffix={metric.suffix} countAnimated={countAnimated} />
                </div>
                <div className={`text-white/90 font-medium leading-tight ${metric.size === 'large' ? 'text-sm sm:text-base lg:text-lg' : metric.size === 'medium' ? 'text-xs sm:text-sm lg:text-base' : 'text-xs sm:text-sm'}`}>
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
      title: "Capacity-Building Programs",
      description: "Focus on equipping fellows with essential leadership and skills development for effective social impact initiatives, covering areas like project management, policy analysis, and civic engagement strategies.",
      features: ["Project management", "Policy analysis", "Civic engagement", "Leadership development"]
    },
    {
      title: "Speaker Sessions and Workshops",
      description: "Provide fellows with opportunities to engage with experts on critical topics like inclusive policies, social stratification, public policy, ethics, and compassion in governance and public service.",
      features: ["Expert sessions", "Policy workshops", "Ethics training", "Governance seminars"]
    },
    {
      title: "Resource Generation and Mobilisation",
      description: "Focuses on equipping fellows with the skills to develop fundraising strategies for civic initiatives, create sustainable models for public service, and leverage partnerships for community impact.",
      features: ["Civic fundraising", "Public service models", "Community partnerships", "Impact sustainability"]
    },
    {
      title: "Volunteer Management and Engagement",
      description: "Empowers fellows to lead in volunteer recruitment for civic causes, training in public service, community engagement programs, and creating strategies for civic participation.",
      features: ["Civic recruitment", "Public service training", "Community programs", "Civic participation"]
    },
    {
      title: "Organizational Support and Practical Exposure",
      description: "Provides fellows with hands-on experience in government bodies, NGOs, policy research, public administration, and civic organizations to build practical governance skills.",
      features: ["Government exposure", "Policy research", "Public administration", "Civic organizations"]
    },
    {
      title: "Profile Building & Placement Assistance",
      description: "Focuses on enhancing fellows' professional profiles for public service careers, civil service preparation, and access to opportunities in governance, policy, and public administration sectors.",
      features: ["Public service careers", "Civil service prep", "Policy opportunities", "Administration roles"]
    }
  ];

  return (
    <section id="highlights" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className={`text-center mb-12 sm:mb-16 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#023080] mb-6">
            Key Highlights of the Fellowship
          </h2>
          <p className="text-lg sm:text-xl text-[#04307b] max-w-3xl mx-auto">
            Comprehensive programs designed to develop civic leadership and create sustainable democratic engagement.
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
            Join Our Fellowship
          </h2>
          <p className="text-lg sm:text-xl text-[#d2d5e0] mb-8 sm:mb-12 leading-relaxed">
            Be part of building a stronger democracy through civic engagement and public service. 
            Help us create the next generation of ethical public leaders.
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

// Main CCAE Component
const CCAE = () => {
  const [isVisible, setIsVisible] = useState({
    mission: false,
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
      <MissionSection isVisible={isVisible.mission} />
      <ObjectivesSection isVisible={isVisible.objectives} />
      <MetricsSection isVisible={isVisible.metrics} countAnimated={countAnimated} />
      <HighlightsSection isVisible={isVisible.highlights} />
      <CTASection isVisible={isVisible.cta} />
    </div>
  );
};

export default CCAE;