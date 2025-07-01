import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Youtube, X } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* About Us Section */}
          <div>
            <h3 className="text-lg font-semibold text-[#023080] mb-4">About Us</h3>
            <ul className="space-y-2">
              <li><Link to="/our-history" className="text-[#04307b] hover:text-[#023080] transition-colors">Our History</Link></li>
              <li><Link to="/chairman-managing-trustee" className="text-[#04307b] hover:text-[#023080] transition-colors">Chairman & Managing Trustee</Link></li>
              <li><Link to="/advisory-board" className="text-[#04307b] hover:text-[#023080] transition-colors">Advisory Board</Link></li>
              <li><Link to="/board-members" className="text-[#04307b] hover:text-[#023080] transition-colors">Board Members</Link></li>
              <li><Link to="/core-team" className="text-[#04307b] hover:text-[#023080] transition-colors">Core Team</Link></li>
              <li><Link to="/founding-supporters" className="text-[#04307b] hover:text-[#023080] transition-colors">Founding Supporters</Link></li>
              <li><Link to="/young-change-makers" className="text-[#04307b] hover:text-[#023080] transition-colors">Young Change Makers</Link></li>
              <li><Link to="/partners-collaborations" className="text-[#04307b] hover:text-[#023080] transition-colors">Partners & Collaborations</Link></li>
              <li><Link to="/reach-presence" className="text-[#04307b] hover:text-[#023080] transition-colors">Reach & Presence</Link></li>
              <li><Link to="/privacy-policy" className="text-[#04307b] hover:text-[#023080] transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-conditions" className="text-[#04307b] hover:text-[#023080] transition-colors">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Interventions Section */}
          <div>
            <h3 className="text-lg font-semibold text-[#023080] mb-4">Interventions</h3>
            <div className="mb-4">
              <h4 className="font-semibold text-[#023080] mb-2">SWIS Foundation</h4>
              <ul className="space-y-1">
                <li><Link to="/education" className="text-[#04307b] hover:text-[#023080] transition-colors">Education</Link></li>
                <li><Link to="/skill-development" className="text-[#04307b] hover:text-[#023080] transition-colors">Skill Development</Link></li>
                <li><Link to="/nutrition" className="text-[#04307b] hover:text-[#023080] transition-colors">Nutrition</Link></li>
                <li><Link to="/healthcare" className="text-[#04307b] hover:text-[#023080] transition-colors">Healthcare</Link></li>
                <li><Link to="/relief-of-poor" className="text-[#04307b] hover:text-[#023080] transition-colors">Relief of Poor</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-[#023080] mb-2">SWIS Institute</h4>
              <ul className="space-y-1">
                <li><Link to="/social-impact-innovation" className="text-[#04307b] hover:text-[#023080] transition-colors">Centre for Social Impact & Innovation</Link></li>
                <li><Link to="/social-awareness-action" className="text-[#04307b] hover:text-[#023080] transition-colors">Centre for Social Awareness & Action</Link></li>
                <li><Link to="/civil-administration" className="text-[#04307b] hover:text-[#023080] transition-colors">Centre for Civil Administration & Engagement</Link></li>
              </ul>
            </div>
          </div>

          {/* Get Involved & Careers Section */}
          <div>
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-[#023080] mb-4">Get Involved</h3>
              <ul className="space-y-2">
                <li><Link to="/volunteering-internships" className="text-[#04307b] hover:text-[#023080] transition-colors">Volunteering & Internships</Link></li>
                <li><Link to="/corporate-partners" className="text-[#04307b] hover:text-[#023080] transition-colors">Corporate Partners</Link></li>
                <li><Link to="/non-profits" className="text-[#04307b] hover:text-[#023080] transition-colors">Non - Profits</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#023080] mb-4">Careers</h3>
              <ul className="space-y-2">
                <li><Link to="/careers" className="text-[#04307b] hover:text-[#023080] transition-colors">Careers</Link></li>
                <li><Link to="/search-apply" className="text-[#04307b] hover:text-[#023080] transition-colors">Search & Apply</Link></li>
                <li><Link to="/working-at-swis" className="text-[#04307b] hover:text-[#023080] transition-colors">Working at SWIS Ventures</Link></li>
                <li><Link to="/code-of-conduct" className="text-[#04307b] hover:text-[#023080] transition-colors">Code of Conduct</Link></li>
              </ul>
            </div>
          </div>

          {/* Contact Us & Quick Links Section */}
          <div>
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-[#023080] mb-4">Contact Us</h3>
              <ul className="space-y-2">
                <li><Link to="/contact" className="text-[#04307b] hover:text-[#023080] transition-colors">Get in Touch</Link></li>
                <li><Link to="/faqs" className="text-[#04307b] hover:text-[#023080] transition-colors">FAQs</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#023080] mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/news-media" className="text-[#04307b] hover:text-[#023080] transition-colors">News & Media</Link></li>
                <li><Link to="/events" className="text-[#04307b] hover:text-[#023080] transition-colors">Events</Link></li>
                <li><Link to="/reports" className="text-[#04307b] hover:text-[#023080] transition-colors">Reports</Link></li>
                <li><Link to="/fraud-alert" className="text-[#04307b] hover:text-[#023080] transition-colors">Fraud Alert - Global</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Logo and Copyright */}
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <img 
                src="/lovable-uploads/63a86df7-034a-400b-bdfb-d9f56e912d96.png" 
                alt="SWIS Logo" 
                className="h-8 w-auto"
              />
              <span className="text-sm text-gray-600">
                © 2025 Social Welfare & Impact Solutions. All rights reserved.
              </span>
            </div>

            {/* Social Media Icons */}
            <div className="flex items-center space-x-4">
              <a 
                href="https://facebook.com/swis" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#C8A870] rounded-full flex items-center justify-center text-white hover:bg-[#B8986B] transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://instagram.com/swis" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#C8A870] rounded-full flex items-center justify-center text-white hover:bg-[#B8986B] transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://twitter.com/swis" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#C8A870] rounded-full flex items-center justify-center text-white hover:bg-[#B8986B] transition-colors"
              >
                <X size={20} />
              </a>
              <a 
                href="https://linkedin.com/company/swis" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#C8A870] rounded-full flex items-center justify-center text-white hover:bg-[#B8986B] transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://youtube.com/swis" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#C8A870] rounded-full flex items-center justify-center text-white hover:bg-[#B8986B] transition-colors"
              >
                <Youtube size={20} />
              </a>
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-4 text-sm text-gray-600 mt-4 md:mt-0">
              <Link to="/privacy-policy" className="hover:text-[#023080] transition-colors">Privacy Policy</Link>
              <Link to="/legal-notice" className="hover:text-[#023080] transition-colors">Legal Notice</Link>
              <Link to="/report-security-issue" className="hover:text-[#023080] transition-colors">Report Security Issue</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;