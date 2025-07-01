import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
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
      title: 'About',
      items: [
        { name: 'About', path: '/about' },
        { name: 'Our History', path: '/our-history' },
        { name: 'Founder-Chairman', path: '/founder-chairman' },
        { name: 'Chairman & Managing Director', path: '/chairman-md' },
        { name: 'Board of Directors', path: '/board-directors' },
        { name: 'Board Committees', path: '/board-committees' },
        { name: 'Awards', path: '/awards' }
      ]
    },
    {
      title: 'Businesses',
      items: [
        { name: 'Our Impact', path: '/our-impact' },
        { name: 'Corporate Social Responsibility', path: '/csr' },
        { name: 'RF Founder-Chairperson', path: '/rf-founder' },
        { name: 'Reliance Foundation', path: '/foundation' },
        { name: 'Products & Brands', path: '/products' }
      ]
    },
    {
      title: 'Sustainability',
      items: [
        { name: 'Innovation', path: '/innovation' },
        { name: 'Research & Technology Development', path: '/research' },
        { name: 'JioGenNext', path: '/jiogennext' },
        { name: 'Manufacturing Locations', path: '/manufacturing' }
      ]
    },
    {
      title: 'Investors',
      items: [
        { name: 'Investor Relations', path: '/investor-relations' },
        { name: 'Financial Reports', path: '/financial-reports' },
        { name: 'Corporate Governance', path: '/governance' }
      ]
    },
    {
      title: 'Careers',
      items: [
        { name: 'Job Opportunities', path: '/jobs' },
        { name: 'Life at Company', path: '/life' },
        { name: 'Campus Recruitment', path: '/campus' }
      ]
    },
    {
      title: 'News & Media',
      items: [
        { name: 'Press Releases', path: '/press' },
        { name: 'Media Gallery', path: '/gallery' },
        { name: 'Events', path: '/events' }
      ]
    }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
      isScrolled ? 'bg-transparent shadow-md' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className={`text-2xl font-bold transition-colors duration-300 ${
                isScrolled ? 'text-[#023080]' : 'text-black'
              }`}>
                SWIS
              </span>
            </Link>
          </div>

          {/* Navigation Items */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.title} className="relative group">
                <button
                  onClick={() => handleDropdownToggle(item.title)}
                  className={`flex items-center space-x-1 px-3 py-2 text-sm font-medium transition-colors duration-300 ${
                    isScrolled ? 'text-[#023080] hover:text-[#04307b]' : 'text-blue hover:text-gray-200'
                  }`}
                >
                  <span>{item.title}</span>
                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${
                    activeDropdown === item.title ? 'rotate-180' : ''
                  }`} />
                </button>

                {/* Dropdown Menu */}
                {activeDropdown === item.title && (
                  <div className="absolute top-full left-0 mt-1 w-64 bg-white shadow-lg rounded-md border border-gray-200 py-2 z-50 animate-in fade-in-0 zoom-in-95">
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

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button className={`p-2 rounded-md transition-colors duration-300 ${
              isScrolled ? 'text-[#023080]' : 'text-white'
            }`}>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown overlay */}
      {activeDropdown && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setActiveDropdown(null)}
        />
      )}
    </nav>
  );
};

export default Navbar;
