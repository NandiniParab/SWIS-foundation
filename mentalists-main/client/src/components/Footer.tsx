import { Link } from "react-router-dom"
import { Facebook, Instagram, Linkedin, Youtube, X } from "lucide-react"

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#FCFDFF" }} className="border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Us Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4" style={{ color: "#023080" }}>
              About Us
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/history" className="transition-colors hover:text-[#023080]" style={{ color: "#04307b" }}>
                  Our History
                </Link>
              </li>
              <li>
                <Link
                  to="/founderchairman"
                  className="transition-colors hover:text-[#023080]"
                  style={{ color: "#04307b" }}
                >
                  Chairman & Managing Trustee
                </Link>
              </li>
              <li>
                <Link to="/member" className="transition-colors hover:text-[#023080]" style={{ color: "#04307b" }}>
                  Advisory Board
                </Link>
              </li>
              <li>
                <Link to="/member" className="transition-colors hover:text-[#023080]" style={{ color: "#04307b" }}>
                  Board Members
                </Link>
              </li>
              <li>
                <Link to="/member" className="transition-colors hover:text-[#023080]" style={{ color: "#04307b" }}>
                  Core Team
                </Link>
              </li>
              <li>
                <Link to="/member" className="transition-colors hover:text-[#023080]" style={{ color: "#04307b" }}>
                  Founding Supporters
                </Link>
              </li>
              <li>
                <Link to="/allinone" className="transition-colors hover:text-[#023080]" style={{ color: "#04307b" }}>
                  Partners & Collaborations
                </Link>
              </li>
              <li>
                <Link to="/allinone" className="transition-colors hover:text-[#023080]" style={{ color: "#04307b" }}>
                  Reach & Presence
                </Link>
              </li>
              <li>
                <Link
                  to="/PrivacyPolicy"
                  className="transition-colors hover:text-[#023080]"
                  style={{ color: "#04307b" }}
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/TermsAndConditions"
                  className="transition-colors hover:text-[#023080]"
                  style={{ color: "#04307b" }}
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Interventions Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4" style={{ color: "#023080" }}>
              Interventions
            </h3>
            <div className="mb-4">
              <h4 className="font-semibold mb-2" style={{ color: "#023080" }}>
                SWIS Foundation
              </h4>
              <ul className="space-y-1">
                <li>
                  <Link to="/Education" className="transition-colors hover:text-[#023080]" style={{ color: "#04307b" }}>
                    Education
                  </Link>
                </li>
                <li>
                  <Link
                    to="/SkillDevelopment"
                    className="transition-colors hover:text-[#023080]"
                    style={{ color: "#04307b" }}
                  >
                    Skill Development
                  </Link>
                </li>
                <li>
                  <Link to="/new" className="transition-colors hover:text-[#023080]" style={{ color: "#04307b" }}>
                    Nutrition
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2" style={{ color: "#023080" }}>
                SWIS Institute
              </h4>
              <ul className="space-y-1">
                <li>
                  <Link to="/csii" className="transition-colors hover:text-[#023080]" style={{ color: "#04307b" }}>
                    Centre for Social Impact & Innovation
                  </Link>
                </li>
                <li>
                  <Link to="/csaa" className="transition-colors hover:text-[#023080]" style={{ color: "#04307b" }}>
                    Centre for Social Awareness & Action
                  </Link>
                </li>
                <li>
                  <Link to="/ccae" className="transition-colors hover:text-[#023080]" style={{ color: "#04307b" }}>
                    Centre for Civil Administration & Engagement
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Careers & Contact Section */}
          <div>
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-4" style={{ color: "#023080" }}>
                Careers
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/Careers" className="transition-colors hover:text-[#023080]" style={{ color: "#04307b" }}>
                    Careers
                  </Link>
                </li>
                <li>
                  <Link to="/Careers" className="transition-colors hover:text-[#023080]" style={{ color: "#04307b" }}>
                    Working at SWIS
                  </Link>
                </li>
                <li>
                  <Link to="/coc" className="transition-colors hover:text-[#023080]" style={{ color: "#04307b" }}>
                    Code of Conduct
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4" style={{ color: "#023080" }}>
                Contact Us
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/ContactPage"
                    className="transition-colors hover:text-[#023080]"
                    style={{ color: "#04307b" }}
                  >
                    Get in Touch
                  </Link>
                </li>
                <li>
                  <Link to="/JoinUs" className="transition-colors hover:text-[#023080]" style={{ color: "#04307b" }}>
                    Join Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Social Media Icons - Centered */}
        <div className="flex justify-center items-center space-x-4 mb-8">
          <a
            href="https://facebook.com/swis"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full flex items-center justify-center text-white transition-colors hover:bg-[#04307b]"
            style={{ backgroundColor: "#8e9fc5" }}
          >
            <Facebook size={20} />
          </a>
          <a
            href="https://instagram.com/swis"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full flex items-center justify-center text-white transition-colors hover:bg-[#04307b]"
            style={{ backgroundColor: "#8e9fc5" }}
          >
            <Instagram size={20} />
          </a>
          <a
            href="https://twitter.com/swis"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full flex items-center justify-center text-white transition-colors hover:bg-[#04307b]"
            style={{ backgroundColor: "#8e9fc5" }}
          >
            <X size={20} />
          </a>
          <a
            href="https://linkedin.com/company/swis"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full flex items-center justify-center text-white transition-colors hover:bg-[#04307b]"
            style={{ backgroundColor: "#8e9fc5" }}
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://youtube.com/swis"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full flex items-center justify-center text-white transition-colors hover:bg-[#04307b]"
            style={{ backgroundColor: "#8e9fc5" }}
          >
            <Youtube size={20} />
          </a>
        </div>

        {/* Bottom Section */}
        <div className="border-t pt-8" style={{ borderColor: "#d2d5e0" }}>
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Copyright - Left */}
            <div className="text-sm mb-4 md:mb-0" style={{ color: "#8e9fc5" }}>
              © 2025 SWIS Foundation. All rights reserved.
            </div>

            {/* Logo - Center */}
            <div className="flex justify-center mb-4 md:mb-0">
              <img src="/swis-logo-blue.png" alt="SWIS Foundation" className="h-8 w-auto" />
            </div>

            {/* Developer Credits - Right */}
            <div className="text-sm" style={{ color: "#8e9fc5" }}>
              Website designed and developed by Jiya Gudhaka, Nandini Parab, Shreya Mahajan
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
