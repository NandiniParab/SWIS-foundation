import React, { useState, useEffect } from 'react';
import { ChevronDown, Users, BookOpen, Briefcase, Heart, Award, Globe, Camera } from 'lucide-react';

function Start()  {
  const [activeTab, setActiveTab] = useState('CSAA');
  const [activeIntervention, setActiveIntervention] = useState('EDUCATION');
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[id]').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // CSAA Tab Content
  const csaaContent = {
    'CSAA': {
      title: 'Centre for Social Awareness & Action',
      description: 'Empowering communities through awareness campaigns and direct action initiatives that create lasting social change.',
      details: [
        'Community mobilization and grassroots organizing',
        'Awareness campaigns on social issues',
        'Direct action initiatives for policy change',
        'Capacity building for local leaders',
        'Social advocacy and rights protection'
      ]
    },
    'CSII': {
      title: 'Centre for Social Impact & Innovation', 
      description: 'Driving innovation in social solutions through research, technology, and collaborative partnerships.',
      details: [
        'Research and development in social innovation',
        'Technology solutions for social problems',
        'Impact measurement and evaluation',
        'Innovation labs and incubators',
        'Cross-sector partnerships and collaboration'
      ]
    },
    'CCAE': {
      title: 'Centre for Civil Administration & Engagement',
      description: 'Building bridges between citizens and governance through capacity building and civic engagement programs.',
      details: [
        'Civic engagement and participation programs',
        'Government accountability initiatives',
        'Policy advocacy and reform',
        'Citizen education and awareness',
        'Administrative capacity building'
      ]
    }
  };

  // Intervention Content
  const interventionContent = {
    'EDUCATION': {
      title: 'Education',
      description: 'Our quest to make India education sufficient led us to become one of the largest education and skill development players in India. Our programs focus on quality education for underprivileged children and communities.',
      extendedDescription: 'Today, SWIS is among the first organizations globally to adopt an integrated approach to education, combining traditional learning with modern technology and innovative teaching methods.',
      programs: [
        'Primary and Secondary Education Programs',
        'Digital Learning Initiatives',
        'Teacher Training and Development',
        'Educational Infrastructure Development',
        'Scholarship and Financial Aid Programs'
      ]
    },
    'SKILL DEVELOPMENT': {
      title: 'Skill Development',
      description: 'Empowering youth and adults with market-relevant skills to enhance their employability and entrepreneurial capabilities.',
      extendedDescription: 'Our comprehensive skill development programs are designed to bridge the gap between education and employment, focusing on both technical and soft skills.',
      programs: [
        'Vocational Training Programs',
        'Digital Skills and Technology Training',
        'Entrepreneurship Development',
        'Industry Partnerships and Placements',
        'Certification and Recognition Programs'
      ]
    },
    'HEALTHCARE': {
      title: 'Healthcare',
      description: 'Providing accessible and quality healthcare services to underserved communities across India.',
      extendedDescription: 'Our healthcare initiatives focus on preventive care, community health programs, and building sustainable healthcare infrastructure.',
      programs: [
        'Mobile Health Clinics',
        'Community Health Worker Training',
        'Maternal and Child Health Programs',
        'Health Awareness Campaigns',
        'Telemedicine and Digital Health'
      ]
    },
    'NUTRITION': {
      title: 'Nutrition',
      description: 'Addressing malnutrition and promoting healthy eating habits through comprehensive nutrition programs.',
      extendedDescription: 'Our nutrition initiatives combine direct feeding programs with education and community-based interventions to ensure sustainable impact.',
      programs: [
        'Mid-Day Meal Programs',
        'Supplementary Nutrition for Pregnant Women',
        'Community Kitchen Initiatives',
        'Nutrition Education and Awareness',
        'Kitchen Garden Development Programs'
      ]
    },
    'NEW PROGRAMS': {
      title: 'New Programs',
      description: 'Innovative initiatives designed to address emerging social challenges and create sustainable impact.',
      extendedDescription: 'Our new programs focus on cutting-edge solutions and pilot projects that can be scaled for maximum social impact.',
      programs: [
        'Climate Change Adaptation Programs',
        'Digital Inclusion Initiatives',
        'Mental Health and Wellbeing',
        'Disaster Relief and Preparedness',
        'Sustainable Livelihood Programs'
      ]
    },
    'COMMUNITY OUTREACH': {
      title: 'Community Outreach',
      description: 'Building strong community connections and fostering local participation in development initiatives.',
      extendedDescription: 'Our outreach programs ensure that communities are active participants in their own development journey.',
      programs: [
        'Community Leadership Development',
        'Volunteer Engagement Programs',
        'Local Partnership Building',
        'Cultural and Social Events',
        'Feedback and Grievance Mechanisms'
      ]
    }
  };

  const ImagePlaceholder = ({ text, className = "" }) => (
    <div className={`bg-gradient-to-br from-gray-200 to-gray-300 border-4 border-dashed border-blue-500 flex flex-col items-center justify-center text-blue-600 font-bold ${className}`}>
      <Camera className="w-12 h-12 mb-2" />
      <span className="text-lg">{text}</span>
      <span className="text-sm mt-1">IMAGE PLACEHOLDER</span>
    </div>
  );

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Hero Section */}
      <section 
        id="hero" 
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), 
                           url('data:image/svg+xml,${encodeURIComponent(`
                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800" fill="none">
                               <defs>
                                 <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
                                   <stop offset="0%" style="stop-color:#1f2937"/>
                                   <stop offset="50%" style="stop-color:#374151"/>
                                   <stop offset="100%" style="stop-color:#4b5563"/>
                                 </linearGradient>
                               </defs>
                               <rect width="1200" height="800" fill="url(#bg)"/>
                               <g opacity="0.3">
                                 <circle cx="200" cy="200" r="100" fill="#f97316"/>
                                 <circle cx="800" cy="300" r="150" fill="#3b82f6"/>
                                 <circle cx="1000" cy="600" r="80" fill="#10b981"/>
                                 <path d="M0,400 Q300,300 600,400 T1200,400" stroke="#f97316" stroke-width="2" fill="none"/>
                               </g>
                               <text x="600" y="400" text-anchor="middle" fill="#ffffff" font-size="24" opacity="0.1">EMPOWERING COMMUNITIES</text>
                             </svg>
                           `)}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Header Navigation */}
        <div className="absolute top-0 left-0 right-0 z-20">
          <div className="flex justify-between items-center p-6">
            <div className="flex items-center group">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center mr-3 shadow-lg">
                <span className="text-white font-bold text-xs">SWIS</span>
              </div>
              <span className="text-white text-lg font-extralight tracking-wider">Growth is Life</span>
            </div>
            <nav className="hidden md:flex space-x-8 text-white">
              {['About', 'Interventions', 'Sustainability', 'Investors', 'Careers', 'News & Media'].map((item) => (
                <a 
                  key={item}
                  href="#" 
                  className="relative font-light hover:text-orange-400 transition-all duration-300"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-400 transition-all duration-300 hover:w-full"></span>
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-6 flex flex-col items-center justify-center min-h-screen text-center">
          <div>
            <h1 className="text-7xl md:text-9xl font-extralight mb-8 leading-none text-white">
              Growth
              <br />
              is{' '}
              <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                Life
              </span>
            </h1>
            
            <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto mb-12"></div>
            
            <p className="text-xl md:text-2xl font-light text-gray-200 mb-12 max-w-2xl mx-auto leading-relaxed">
              Empowering communities through sustainable development and social innovation
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group px-8 py-4 border border-white/30 backdrop-blur-sm rounded-full text-white font-light hover:bg-white hover:text-gray-900 transition-all duration-300">
                <span className="flex items-center justify-center">
                  About Us
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>
              
              <button className="group px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 backdrop-blur-sm rounded-full text-white font-light hover:from-orange-600 hover:to-orange-700 transition-all duration-300">
                <span className="flex items-center justify-center">
                  Our Impact
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
          
          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="flex flex-col items-center text-white/70 hover:text-white transition-colors cursor-pointer group">
              <span className="text-sm font-light mb-2 tracking-wider">Discover More</span>
              <ChevronDown className="w-6 h-6 animate-bounce" />
            </div>
          </div>
        </div>
      </section>

      {/* We Care Section */}
      <section 
        id="we-care" 
        className="py-20 bg-gradient-to-r from-orange-100 to-yellow-50"
      >
        <div className="container mx-auto px-4 text-center">
          <div className="mb-12">
            <h2 className="text-6xl font-light text-gray-800 mb-8 tracking-wider">
              WE CARE
            </h2>
            <p className="text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-light">
              <span className="font-bold text-blue-900">SWIS™</span> is an Indian non-profit committed to radically impact the life of <span className="font-bold text-blue-900">2M+</span> people in the next <span className="font-bold text-blue-900">2 decades</span>.
            </p>
          </div>
        </div>
      </section>

      {/* CSAA Tabs Section */}
      <section id="csaa-tabs" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-light text-gray-800 mb-8">SWIS Institute</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our three specialized centres work together to create comprehensive social impact
            </p>
          </div>
          
          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="flex bg-gray-100 rounded-full p-1">
              {Object.keys(csaaContent).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-8 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeTab === tab
                      ? 'bg-orange-500 text-white shadow-lg'
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
          
          {/* Tab Content */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-blue-50 to-orange-50 rounded-2xl p-12">
              <h3 className="text-3xl font-light text-gray-800 mb-6">
                {csaaContent[activeTab].title}
              </h3>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                {csaaContent[activeTab].description}
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-4">Key Focus Areas:</h4>
                  <ul className="space-y-3">
                    {csaaContent[activeTab].details.map((detail, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-center justify-center">
                  <ImagePlaceholder 
                    text={`${activeTab} ILLUSTRATION`}
                    className="w-full h-64 rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interventions Section with Tabs */}
      <section 
        id="interventions" 
        className="bg-gray-800 text-white"
      >
        <div className="container mx-auto">
          <div className="flex min-h-screen">
            {/* Left Content */}
            <div className="w-1/2 p-16 flex flex-col justify-center">
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <div className="w-2 h-8 bg-orange-500 mr-4"></div>
                  <span className="text-orange-500 text-sm uppercase tracking-wider">OUR INTERVENTIONS</span>
                </div>
              </div>
              
              <h2 className="text-6xl font-light mb-8 leading-tight">
                {interventionContent[activeIntervention].title}
              </h2>
              
              <div className="space-y-6 text-lg font-light leading-relaxed">
                <p>{interventionContent[activeIntervention].description}</p>
                <p>{interventionContent[activeIntervention].extendedDescription}</p>
                
                <div className="mt-8">
                  <h4 className="text-xl font-semibold mb-4">Our Programs:</h4>
                  <ul className="space-y-2">
                    {interventionContent[activeIntervention].programs.map((program, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>{program}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <button className="mt-8 px-6 py-3 border-2 border-white rounded-full text-white hover:bg-white hover:text-gray-800 transition-all duration-300 self-start">
                read more →
              </button>
            </div>
            
            {/* Right Image and Menu */}
            <div className="w-1/2 relative">
              <ImagePlaceholder 
                text={`${activeIntervention} IMAGE`}
                className="w-full h-full"
              />
              
              {/* Side Menu */}
              <div className="absolute right-8 top-1/2 transform -translate-y-1/2 space-y-4">
                {Object.keys(interventionContent).map((intervention) => (
                  <div
                    key={intervention}
                    onClick={() => setActiveIntervention(intervention)}
                    className={`px-6 py-3 rounded cursor-pointer transition-colors ${
                      activeIntervention === intervention
                        ? 'bg-orange-500 text-white'
                        : 'bg-gray-700 text-white hover:bg-gray-600'
                    }`}
                  >
                    <span className="font-bold">{intervention}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section 
        id="sustainability" 
        className="bg-blue-900 text-white py-20"
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center min-h-96">
            <div className="w-1/2 pr-16">
              <div className="mb-8">
                <div className="flex space-x-8 mb-8">
                  <span className="text-orange-500 border-b-2 border-orange-500 pb-2">Sustainability</span>
                  <span className="text-gray-300 hover:text-white cursor-pointer">Innovation</span>
                  <span className="text-gray-300 hover:text-white cursor-pointer">Our Impact</span>
                </div>
              </div>
              
              <h2 className="text-5xl font-light mb-8 leading-tight">
                Corporate Sustainability
              </h2>
              
              <div className="space-y-6 text-lg font-light leading-relaxed">
                <p>
                  Our growth strategy is defined by our mission and our corporate responsibility. Our commitment to sustainable value-creation demonstrates the principle that we care for our people and our planet.
                </p>
                
                <p>
                  Our mission remains to continue growing as a responsible organisation that enriches lives, while striving for economic and ecological sustainability. We are on the path to transforming our legacy programs to net-zero carbon operations, while ensuring sustainability through circular impact. SWIS has set an ambitious target to become a net-zero carbon organization by 2035.
                </p>
              </div>
              
              <button className="mt-8 px-6 py-3 border-2 border-white rounded-full text-white hover:bg-white hover:text-blue-900 transition-all duration-300">
                read more →
              </button>
            </div>
            
            <div className="w-1/2">
              <ImagePlaceholder 
                text="SOLAR PANELS/SUSTAINABILITY IMAGE"
                className="w-full h-80 rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Life at SWIS Section */}
      <section 
        id="careers" 
        className="py-20 bg-gradient-to-r from-orange-200 to-yellow-100"
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center min-h-96">
            <div className="w-1/2 pr-16">
              <h2 className="text-5xl font-light text-gray-800 mb-8 leading-tight">
                Life at SWIS
              </h2>
              
              <h3 className="text-2xl font-light text-gray-700 mb-8">
                Why work at SWIS?
              </h3>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed font-light">
                SWIS Foundation is one of the biggest non-profit organizations in India. With the help of a robust, consistent, and meritocratic framework for people management, SWIS continues to maintain an inclusive, progressive, and high-performance environment, where purpose-driven talent is enabled with unprecedented access to opportunities for growth.
              </p>
              
              <div className="flex space-x-4">
                <button className="px-6 py-3 border-2 border-gray-800 rounded-full text-gray-800 hover:bg-gray-800 hover:text-white transition-all duration-300">
                  meet our people →
                </button>
                <button className="px-6 py-3 border-2 border-gray-800 rounded-full text-gray-800 hover:bg-gray-800 hover:text-white transition-all duration-300">
                  search & apply →
                </button>
              </div>
            </div>
            
            <div className="w-1/2 relative">
              <div className="grid grid-cols-2 gap-4">
                <ImagePlaceholder 
                  text="EMPLOYEE 1"
                  className="w-full h-48 rounded-lg"
                />
                <div className="space-y-4">
                  <div className="bg-red-600 text-white p-4 rounded-lg text-center">
                    <div className="text-white font-bold">Great Place To Work</div>
                    <div className="text-sm">Certified</div>
                    <div className="text-xs mt-1">FOR 2024-2025</div>
                    <div className="text-xs">INDIA</div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <ImagePlaceholder 
                  text="EMPLOYEE 2"
                  className="w-full h-32 rounded-lg"
                />
                <ImagePlaceholder 
                  text="EMPLOYEES 3"
                  className="w-full h-32 rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-16 border-t">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="font-bold text-gray-800 mb-4">About Us</h3>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-blue-600">Our History</a></li>
                <li><a href="#" className="hover:text-blue-600">Chairman & Managing Trustee</a></li>
                <li><a href="#" className="hover:text-blue-600">Advisory Board</a></li>
                <li><a href="#" className="hover:text-blue-600">Board Members</a></li>
                <li><a href="#" className="hover:text-blue-600">Core Team</a></li>
                <li><a href="#" className="hover:text-blue-600">Founding Supporters</a></li>
                <li><a href="#" className="hover:text-blue-600">Young Change Makers</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-gray-800 mb-4">Interventions</h3>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-blue-600">SWIS Foundation</a></li>
                <li><a href="#" className="hover:text-blue-600">Education</a></li>
                <li><a href="#" className="hover:text-blue-600">Skill Development</a></li>
                <li><a href="#" className="hover:text-blue-600">Nutrition</a></li>
                <li><a href="#" className="hover:text-blue-600">Healthcare</a></li>
                <li><a href="#" className="hover:text-blue-600">Relief of Poor</a></li>
              </ul>
              
              <h3 className="font-bold text-gray-800 mb-4 mt-8">SWIS Institute</h3>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-blue-600">Centre for Social Impact & Innovation</a></li>
                <li><a href="#" className="hover:text-blue-600">Centre for Social Awareness & Action</a></li>
                <li><a href="#" className="hover:text-blue-600">Centre for Civil Administration & Engagement</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-gray-800 mb-4">Get Involved</h3>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-blue-600">Volunteering & Internships</a></li>
                <li><a href="#" className="hover:text-blue-600">Corporate Partners</a></li>
                <li><a href="#" className="hover:text-blue-600">Non-Profits</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-gray-800 mb-4">Careers</h3>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-blue-600">Careers</a></li>
                <li><a href="#" className="hover:text-blue-600">Search & Apply</a></li>
                <li><a href="#" className="hover:text-blue-600">Working at SWIS Ventures</a></li>
                <li><a href="#" className="hover:text-blue-600">Code of Conduct</a></li>
              </ul>
              
              <h3 className="font-bold text-gray-800 mb-4 mt-8">Contact Us</h3>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-blue-600">Get in Touch</a></li>
                <li><a href="#" className="hover:text-blue-600">FAQs</a></li>
              </ul>
            </div>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold">SWIS</span>
            </div>
            <p className="text-gray-600">© 2025 SWIS Foundation. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Start;