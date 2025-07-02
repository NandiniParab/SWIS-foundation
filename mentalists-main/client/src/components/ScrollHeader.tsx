
"use client"

import { useState, useEffect } from "react"
import { ChevronDown, Search, Headphones, Sun, Menu, X } from "lucide-react"

const ScrollHeader = () => {
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
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
        { title: "Our History", href: "#", description: "Learn about our journey and milestones" },
        { title: "Chairman & Managing Trustee", href: "#", description: "Meet our leadership team" },
        { title: "Advisory Board", href: "#", description: "Our strategic advisors and mentors" },
        { title: "Board Members", href: "#", description: "Governing body members" },
        { title: "Core Team", href: "#", description: "Our dedicated team members" },
        { title: "Founding Supporters", href: "#", description: "Those who believed in our vision" },
        { title: "Young Change Makers", href: "#", description: "Next generation leaders" },
        { title: "Partners & Collaborations", href: "#", description: "Strategic partnerships" },
        { title: "Reach & Presence", href: "#", description: "Our global footprint" },
        { title: "Privacy Policy", href: "#", description: "Data protection policies" },
        { title: "Terms & Conditions", href: "#", description: "Terms of service" },
      ],
    },
    {
      title: "Interventions",
      items: [
        { title: "SWIS Foundation", href: "#", description: "Our flagship programs" },
        { title: "Education", href: "#", description: "Quality education initiatives" },
        { title: "Skill Development", href: "#", description: "Vocational training programs" },
        { title: "Nutrition", href: "#", description: "Food security and nutrition" },
        { title: "Healthcare", href: "#", description: "Medical care and wellness" },
        { title: "Relief of Poor", href: "#", description: "Poverty alleviation programs" },
        { title: "SWIS Institute", href: "#", description: "Research and development" },
        { title: "Centre for Social Impact & Innovation", href: "#", description: "Innovation hub" },
        { title: "Centre for Social Awareness & Action", href: "#", description: "Community engagement" },
        { title: "Centre for Civil Administration & Engagement", href: "#", description: "Governance programs" },
      ],
    },
    {
      title: "Get Involved",
      items: [
        { title: "Volunteering & Internships", href: "#", description: "Join our volunteer programs" },
        { title: "Corporate Partners", href: "#", description: "Partnership opportunities" },
        { title: "Non - Profits", href: "#", description: "NGO collaborations" },
        { title: "Donate Now", href: "#", description: "Support our cause" },
        { title: "Fundraising Events", href: "#", description: "Upcoming events" },
        { title: "Community Programs", href: "#", description: "Local initiatives" },
      ],
    },
    {
      title: "Careers",
      items: [
        { title: "Current Openings", href: "#", description: "Available positions" },
        { title: "Search & Apply", href: "#", description: "Find and apply for jobs" },
        { title: "Working at SWIS", href: "#", description: "Employee experience" },
        { title: "Code of Conduct", href: "#", description: "Our values and ethics" },
        { title: "Benefits & Perks", href: "#", description: "Employee benefits" },
        { title: "Career Development", href: "#", description: "Growth opportunities" },
      ],
    },
    {
      title: "News & Media",
      items: [
        { title: "Press Releases", href: "#", description: "Latest announcements" },
        { title: "Media Coverage", href: "#", description: "News articles and features" },
        { title: "Photo Gallery", href: "#", description: "Event photos and moments" },
        { title: "Video Gallery", href: "#", description: "Documentary and videos" },
        { title: "Annual Reports", href: "#", description: "Yearly impact reports" },
        { title: "Newsletter", href: "#", description: "Subscribe to updates" },
      ],
    },
  ]

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
                <button className="hover:text-white transition-colors">Impact Report</button>
                <button className="hover:text-white transition-colors">Donate Now</button>
                <button className="hover:text-white transition-colors">Contact Us</button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <img
                src={scrolled ? "/swis-logo-blue.png" : "/swis-logo-white.png"}
                alt="SWIS Foundation"
                className="h-10 w-auto transition-opacity duration-300"
              />
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
              <button
                className={`transition-colors ${
                  scrolled ? "text-gray-600 hover:text-blue-600" : "text-white hover:text-orange-400"
                }`}
              >
                <Headphones className="w-5 h-5" />
              </button>
              <button
                className={`transition-colors ${
                  scrolled ? "text-gray-600 hover:text-blue-600" : "text-white hover:text-orange-400"
                }`}
              >
                <Sun className="w-5 h-5" />
              </button>
              <button
                className={`transition-colors ${
                  scrolled ? "text-gray-600 hover:text-blue-600" : "text-white hover:text-orange-400"
                }`}
              >
                <Search className="w-5 h-5" />
              </button>

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
                    <a
                      key={index}
                      href={subItem.href}
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
                    </a>
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
                <img src="/swis-logo.png" alt="SWIS Foundation" className="h-8 w-auto" />
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
                        <a
                          key={index}
                          href={subItem.href}
                          className="block transition-colors text-sm py-1"
                          style={{ color: "#8e9fc5" }}
                          onClick={() => setMobileMenuOpen(false)}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.color = "#04307b"
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.color = "#8e9fc5"
                          }}
                        >
                          {subItem.title}
                        </a>
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