"use client"

import { useState, useEffect } from "react"
import { ChevronDown, Menu, X } from "lucide-react"
import { Link } from "react-router-dom"

const ScrollHeader = () => {
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setScrolled(scrollPosition > 100)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navigationItems = [
    {
      title: "About Us",
      items: [
        { title: "Our History", href: "/history", description: "Learn about our journey and milestones" },
        { title: "Chairman & Managing Trustee", href: "/founderchairman", description: "Meet our leadership team" },
        { title: "Advisory Board", href: "/member", description: "Our strategic advisors and mentors" },
        { title: "Board Members", href: "/member", description: "Governing body members" },
        { title: "Core Team", href: "/member", description: "Our dedicated team members" },
        { title: "Founding Supporters", href: "/member", description: "Those who believed in our vision" },
        { title: "Young Change Makers", href: "/member", description: "Next generation leaders" },
        { title: "Partners & Collaborations", href: "/allinone", description: "Strategic partnerships" },
        { title: "Reach & Presence", href: "/allinone", description: "Our global footprint" },
        { title: "Privacy Policy", href: "/PrivacyPolicy", description: "Data protection policies" },
        { title: "Terms & Conditions", href: "/TermsAndConditions", description: "Terms of service" },
      ],
    },
    {
      title: "Interventions",
      items: [
        { title: "SWIS Foundation", href: "/homepage", description: "Our flagship programs" },
        { title: "Education", href: "/new", description: "Quality education initiatives" },
        { title: "Skill Development", href: "/SkillDevelopment", description: "Vocational training programs" },
        { title: "Nutrition", href: "/new", description: "Food security and nutrition" },
        { title: "Healthcare", href: "/new", description: "Medical care and wellness" },
        { title: "Relief of Poor", href: "/new", description: "Poverty alleviation programs" },
        { title: "SWIS Institute", href: "/homepage", description: "Research and development" },
        { title: "Centre for Social Impact & Innovation", href: "/csii", description: "Innovation hub" },
        { title: "Centre for Social Awareness & Action", href: "/csaa", description: "Community engagement" },
        { title: "Centre for Civil Administration & Engagement", href: "/ccae", description: "Governance programs" },
      ],
    },
    {
      title: "Get Involved",
      items: [
        { title: "Volunteering & Internships", href: "/anushka", description: "Join our volunteer programs" },
        { title: "Corporate Partners", href: "/allinone", description: "Partnership opportunities" },
        { title: "Non - Profits", href: "/allinone", description: "NGO collaborations" },
        { title: "Donate Now", href: "/ContactPage", description: "Support our cause" },
        { title: "Fundraising Events", href: "/new", description: "Upcoming events" },
        { title: "Community Programs", href: "/new", description: "Local initiatives" },
      ],
    },
    {
      title: "Careers",
      items: [
        { title: "Current Openings", href: "/Careers", description: "Available positions" },
        { title: "Search & Apply", href: "/Careers", description: "Find and apply for jobs" },
        { title: "Working at SWIS", href: "/Careers", description: "Employee experience" },
        { title: "Code of Conduct", href: "/coc", description: "Our values and ethics" },
        { title: "Benefits & Perks", href: "/Careers", description: "Employee benefits" },
        { title: "Career Development", href: "/Careers", description: "Growth opportunities" },
      ],
    },
    {
      title: "News & Media",
      items: [
        { title: "Press Releases", href: "/new", description: "Latest announcements" },
        { title: "Media Coverage", href: "/new", description: "News articles and features" },
        { title: "Photo Gallery", href: "/new", description: "Event photos and moments" },
        { title: "Video Gallery", href: "/new", description: "Documentary and videos" },
        { title: "Annual Reports", href: "/new", description: "Yearly impact reports" },
        { title: "Newsletter", href: "/new", description: "Subscribe to updates" },
      ],
    },
  ]

  const handleLinkClick = () => {
    setActiveDropdown(null)
    setMobileMenuOpen(false)
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white shadow-lg" : "bg-gradient-to-b from-black/80 via-black/40 to-transparent"
        }`}
      >
        {/* Top Info Bar - Hidden when scrolled */}
        <div
          className={`border-b transition-all duration-300 ${
            scrolled ? "h-0 opacity-0 overflow-hidden border-transparent" : "h-12 opacity-100 border-white/10"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-12 text-sm">
              {/* Left side - Rankings */}
              <div className="flex items-center space-x-4 lg:space-x-8 text-white/90">
                <div className="flex items-center space-x-2">
                  <span style={{ color: "#8e9fc5" }}>IND Ranks 132</span>
                  <span className="hidden sm:inline">- Education</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span style={{ color: "#8e9fc5" }}>IND Ranks 111</span>
                  <span className="hidden sm:inline">- Hunger</span>
                </div>
              </div>

              {/* Right side - Actions */}
              <div className="hidden lg:flex items-center space-x-6 text-white/90">
                <Link to="/new" className="hover:text-white transition-colors">
                  Impact Report
                </Link>
                <Link to="/ContactPage" className="hover:text-white transition-colors">
                  Donate Now
                </Link>
                <Link to="/ContactPage" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/homepage">
                <img
                  src={scrolled ? "/swis-logo-blue.png" : "/swis-logo-white.png"}
                  alt="SWIS Foundation"
                  className="h-12 w-auto transition-opacity duration-300"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <div
                  key={item.title}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(item.title)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    className={`flex items-center space-x-1 transition-colors py-2 ${
                      scrolled ? "text-gray-700 hover:text-blue-600" : "text-white hover:text-orange-400"
                    }`}
                    style={{
                      color: scrolled ? "#023080" : undefined,
                    }}
                  >
                    <span>{item.title}</span>
                    <ChevronDown className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </nav>

            {/* Right side icons */}

            <div className="flex items-center space-x-4">
              {/* Mobile menu button */}
              <button
                className={`lg:hidden transition-colors ${
                  scrolled ? "text-gray-600 hover:text-blue-600" : "text-white hover:text-orange-400"
                }`}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Dropdown Menu */}
        {activeDropdown && (
          <div
            className="absolute top-full left-0 right-0 bg-white shadow-xl border-t z-40"
            style={{ backgroundColor: "#FCFDFF" }}
            onMouseEnter={() => setActiveDropdown(activeDropdown)}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div className="mb-6">
                <h2 className="text-xl font-bold mb-2" style={{ color: "#023080" }}>
                  {activeDropdown}
                </h2>
                <div className="w-12 h-0.5 rounded" style={{ backgroundColor: "#8e9fc5" }}></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {navigationItems
                  .find((item) => item.title === activeDropdown)
                  ?.items.map((subItem, index) => (
                    <Link
                      key={index}
                      to={subItem.href}
                      onClick={handleLinkClick}
                      className="group block p-3 rounded-lg transition-all duration-200 hover:shadow-sm"
                      style={{
                        backgroundColor: "white",
                        borderLeft: "3px solid transparent",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderLeftColor = "#023080"
                        e.currentTarget.style.backgroundColor = "#d2d5e0"
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderLeftColor = "transparent"
                        e.currentTarget.style.backgroundColor = "white"
                      }}
                    >
                      <h3
                        className="font-semibold text-base mb-1 group-hover:text-blue-700 transition-colors"
                        style={{ color: "#04307b" }}
                      >
                        {subItem.title}
                      </h3>
                      <p className="text-xs leading-relaxed" style={{ color: "#8e9fc5" }}>
                        {subItem.description}
                      </p>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="fixed inset-0 bg-black/50" onClick={() => setMobileMenuOpen(false)} />
          <div className="fixed top-0 right-0 h-full w-80 shadow-xl" style={{ backgroundColor: "#FCFDFF" }}>
            <div className="p-6">
              <div className="flex items-center justify-between mb-8">
                <Link to="/homepage" onClick={handleLinkClick}>
                  <img src="/swis-logo-blue.png" alt="SWIS Foundation" className="h-10 w-auto" />
                </Link>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-gray-700"
                  style={{ color: "#8e9fc5" }}
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <nav className="space-y-4">
                {navigationItems.map((item) => (
                  <div key={item.title} className="border-b pb-4" style={{ borderColor: "#d2d5e0" }}>
                    <h3 className="font-semibold mb-2" style={{ color: "#023080" }}>
                      {item.title}
                    </h3>
                    <div className="space-y-2 pl-4">
                      {item.items.slice(0, 5).map((subItem, index) => (
                        <Link
                          key={index}
                          to={subItem.href}
                          onClick={handleLinkClick}
                          className="block transition-colors text-sm py-1"
                          style={{ color: "#8e9fc5" }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.color = "#04307b"
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.color = "#8e9fc5"
                          }}
                        >
                          {subItem.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </nav>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default ScrollHeader
