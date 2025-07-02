import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

// Define interfaces for nav items
interface NavSubItem {
  name: string;
  path: string;
}

interface NavItem {
  name: string;
  path?: string;
  subItems?: NavSubItem[];
}

interface NavSection {
  title: string;
  items: NavItem[];
}

const Navbar: React.FC = () => {
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

  const navItems: NavSection[] = [
    {
      title: 'About Us',
      items: [
        { name: 'Our History', path: '/our-history' },
        { name: 'Chairman & Managing Trustee', path: '/chairman' },
        { name: 'Advisory Board', path: '/advisory-board' },
        { name: 'Board Members', path: '/board-members' },
        { name: 'Core Team', path: '/core-team' },
        { name: 'Founding Supporters', path: '/founding-supporters' },
        { name: 'Partners & Collaborations', path: '/partners' },
        { name: 'Reach & Presence', path: '/reach' },
        { name: 'Privacy Policy', path: '/privacy-policy' },
        { name: 'Terms & Conditions', path: '/terms-conditions' },
      ],
    },
    {
      title: 'Interventions',
      items: [
        {
          name: 'SWIS Foundation',
          subItems: [
            { name: 'Education', path: '/education' },
            { name: 'Skill Development', path: '/skill-development' },
            { name: 'Nutrition', path: '/nutrition' },
            { name: 'Healthcare', path: '/healthcare' },
            { name: 'Relief of Poor', path: '/relief-of-poor' },
          ],
        },
        {
          name: 'SWIS Institute',
          subItems: [
            { name: 'CSII - Centre for Social Impact and Innovation', path: '/centre-social-impact' },
            { name: 'CSAA - Centre for Social Awareness and Action', path: '/centre-social-awareness' },
            { name: 'CCAE - Centre for Civil Administration and Engagement', path: '/centre-civil-administration' },
          ],
        },
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
        { name: 'Code of Conduct', path: '/code-of-conduct' },
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
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: isScrolled
          ? '#ffffff'
          : 'linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0))',
        color: isScrolled ? '#023080' : '#ffffff',
        backdropFilter: isScrolled ? 'blur(10px)' : 'none',
        WebkitBackdropFilter: isScrolled ? 'blur(10px)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span
                className={`text-2xl font-bold transition-colors duration-300 ${
                  isScrolled ? 'text-[#023080]' : 'text-white'
                }`}
              >
                SWIS
              </span>
            </Link>
          </div>

          {/* Nav Items */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.title} className="relative group">
                <button
                  onClick={() => handleDropdownToggle(item.title)}
                  className={`flex items-center space-x-1 px-3 py-2 text-sm font-medium transition-colors duration-300 ${
                    isScrolled
                      ? 'text-[#023080] hover:text-[#04307b]'
                      : 'text-white hover:text-gray-300'
                  }`}
                >
                  <span>{item.title}</span>
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-200 ${
                      activeDropdown === item.title ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {activeDropdown === item.title && (
                  <div className="absolute top-full left-0 mt-1 w-64 bg-white shadow-lg rounded-md border border-gray-200 py-2 z-50">
                    {item.items.map((subItem) => (
                      <div key={subItem.name}>
                        {'subItems' in subItem ? (
                          <>
                            <span className="block px-4 py-2 text-sm text-[#023080] font-semibold">
                              {subItem.name}
                            </span>
                            {subItem.subItems!.map((nestedItem: NavSubItem) => (
                              <Link
                                key={nestedItem.name}
                                to={nestedItem.path}
                                className="block px-6 py-2 text-sm text-[#023080] hover:bg-[#8e9fc5] hover:text-white transition-colors"
                                onClick={() => setActiveDropdown(null)}
                              >
                                {nestedItem.name}
                              </Link>
                            ))}
                          </>
                        ) : (
                          <Link
                            to={subItem.path!}
                            className="block px-4 py-2 text-sm text-[#023080] hover:bg-[#8e9fc5] hover:text-white transition-colors"
                            onClick={() => setActiveDropdown(null)}
                          >
                            {subItem.name}
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Icon (Non-functional for now) */}
          <div className="lg:hidden">
            <button
              className={`p-2 rounded-md transition-colors duration-300 ${
                isScrolled ? 'text-[#023080]' : 'text-white'
              }`}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile overlay backdrop */}
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