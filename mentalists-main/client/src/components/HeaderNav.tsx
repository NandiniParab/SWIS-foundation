import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

const HeaderNav: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDropdownToggle = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const navItems = [
    {
      title: 'About Us',
      items: [
        { name: 'Our History', path: '/our-history' },
        { name: 'Chairman & Managing Trustee', path: '/chairman' },
        { name: 'Advisory Board', path: '/advisory-board' },
        { name: 'Board Members', path: '/board-members' },
        { name: 'Core Team', path: '/core-team' },
        { name: 'Founding Supporters', path: '/founding-supporters' },
        { name: 'Young Change Makers', path: '/young-change-makers' },
        { name: 'Partners & Collaborations', path: '/partners' },
        { name: 'Reach & Presence', path: '/reach' },
        { name: 'Privacy Policy', path: '/privacy-policy' },
        { name: 'Terms & Conditions', path: '/terms-conditions' },
      ],
    },
    {
      title: 'Interventions',
      items: [
        { name: 'SWIS Foundation', path: '/swis-foundation' },
        { name: 'Education', path: '/education' },
        { name: 'Skill Development', path: '/skill-development' },
        { name: 'Nutrition', path: '/nutrition' },
        { name: 'Healthcare', path: '/healthcare' },
        { name: 'Relief of Poor', path: '/relief-of-poor' },
        { name: 'SWIS Institute', path: '/swis-institute' },
        { name: 'Centre for Social Impact & Innovation', path: '/centre-social-impact' },
        { name: 'Centre for Social Awareness & Action', path: '/centre-social-awareness' },
        { name: 'Centre for Civil Administration & Engagement', path: '/centre-civil-administration' },
      ],
    },
    {
      title: 'Get Involved',
      items: [
        { name: 'Volunteering & Internships', path: '/volunteering' },
        { name: 'Corporate Partners', path: '/corporate-partners' },
        { name: 'Non-Profits', path: '/non-profits' },
      ],
    },
    {
      title: 'Careers',
      items: [
        { name: 'Careers & Apply', path: '/careers-apply' },
        { name: 'Working at SWIS Ventures', path: '/working-at-swis' },
      ],
    },
    {
      title: 'Contact Us',
      items: [
        { name: 'Get in Touch', path: '/get-in-touch' },
        { name: 'FAQs', path: '/faqs' },
      ],
    },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 bg-[#1a2a44] text-white py-4 px-4 z-1000" style={{ height: '60px' }}>
        <div className="max-w-7xl mx-auto flex justify-between items-center h-full">
          <div className="flex items-center space-x-6">
            <div>
              <h1 className="text-xl font-bold">SWIS</h1>
              <p className="text-sm">Social Welfare & Impact Solutions</p>
            </div>
            <div className="flex space-x-4">
              <span>NSE: ₹1,528.40 (1.85%)</span>
              <span>BSE: ₹1,528.30 (1.84%)</span>
            </div>
          </div>
          <div className="flex space-x-6">
            <button className="text-white hover:text-gray-300 transition-colors">eB2B</button>
            <button className="text-white hover:text-gray-300 transition-colors">Fraud Alert</button>
            <button className="text-white hover:text-gray-300 transition-colors">Contact Us</button>
          </div>
        </div>
      </header>
      <nav
        className="fixed top-60000px left-0 right-0 z-900 transition-all duration-300"
        style={{
          background: isScrolled
            ? '#ffffff'
            : 'linear-gradient(to bottom, rgba(26, 42, 68, 0.8), rgba(26, 42, 68, 0))',
          color: isScrolled ? '#023080' : '#ffffff',
          backdropFilter: isScrolled ? 'blur(10px)' : 'none',
          WebkitBackdropFilter: isScrolled ? 'blur(10px)' : 'none',
          height: '60px',
        }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-full">
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <span className={`text-2xl font-bold ${isScrolled ? 'text-[#023080]' : 'text-white'}`}>
                  SWIS
                </span>
              </Link>
            </div>
            <div className="hidden lg:flex items-center space-x-6">
              {navItems.map((item) => (
                <div key={item.title} className="relative group">
                  <button
                    onClick={() => handleDropdownToggle(item.title)}
                    className={`flex items-center space-x-1 px-3 py-2 text-sm font-medium transition-colors ${
                      isScrolled ? 'text-[#023080] hover:text-[#04307b]' : 'text-white hover:text-gray-300'
                    }`}
                  >
                    <span>{item.title}</span>
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${activeDropdown === item.title ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {activeDropdown === item.title && (
                    <div className="absolute top-full left-0 mt-1 w-64 bg-white shadow-lg rounded-md border border-gray-200 py-2 z-50">
                      {item.items.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.path}
                          className="block px-4 py-2 text-sm text-[#023080] hover:bg-[#8e9fc5] hover:text-white transition-colors"
                          onClick={() => setActiveDropdown(null)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="lg:hidden">
              <button
                className={`p-2 rounded-md ${isScrolled ? 'text-[#023080]' : 'text-white'}`}
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {activeDropdown && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={() => setActiveDropdown(null)}
          />
        )}
      </nav>
    </>
  );
};

export default HeaderNav;