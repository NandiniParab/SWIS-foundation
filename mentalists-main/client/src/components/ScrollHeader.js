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
      setScrolled(scrollPosition > 50) // Reduced threshold for faster transition
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navigationItems = [
    {
      title: "About Us",
      items: [
        {
          title: "Our History",
          href: "/history",
          description: "Learn about our journey and milestones",
          isSubheading: false,
        },
        {
          title: "Chairman & Managing Trustee",
          href: "/founderchairman",
          description: "Meet our leadership team",
          isSubheading: false,
        },
        {
          title: "Advisory Board",
          href: "/member",
          description: "Our strategic advisors and mentors",
          isSubheading: false,
        },
        { title: "Board Members", href: "/member", description: "Governing body members", isSubheading: false },
        { title: "Core Team", href: "/member", description: "Our dedicated team members", isSubheading: false },
        {
          title: "Founding Supporters",
          href: "/member",
          description: "Those who believed in our vision",
          isSubheading: false,
        },
        {
          title: "Partners & Collaborations",
          href: "/allinone",
          description: "Strategic partnerships",
          isSubheading: false,
        },
        { title: "Reach & Presence", href: "/allinone", description: "Our global footprint", isSubheading: false },
        {
          title: "Privacy Policy",
          href: "/PrivacyPolicy",
          description: "Data protection policies",
          isSubheading: false,
        },
        {
          title: "Terms & Conditions",
          href: "/TermsAndConditions",
          description: "Terms of service",
          isSubheading: false,
        },
      ],
    },
    {
      title: "Interventions",
      items: [
        { title: "SWIS Foundation", href: "#", description: "", isSubheading: true },
        {
          title: "Education",
          href: "/new",
          description: "Quality education initiatives",
          isSubheading: false,
          parent: "SWIS Foundation",
        },
        {
          title: "Skill Development",
          href: "/SkillDevelopment",
          description: "Vocational training programs",
          isSubheading: false,
          parent: "SWIS Foundation",
        },
        {
          title: "Nutrition",
          href: "/new",
          description: "Food security and nutrition",
          isSubheading: false,
          parent: "SWIS Foundation",
        },
        { title: "SWIS Institute", href: "#", description: "", isSubheading: true },
        {
          title: "Centre for Social Impact & Innovation",
          href: "/csii",
          description: "Innovation hub",
          isSubheading: false,
          parent: "SWIS Institute",
        },
        {
          title: "Centre for Social Awareness & Action",
          href: "/csaa",
          description: "Community engagement",
          isSubheading: false,
          parent: "SWIS Institute",
        },
        {
          title: "Centre for Civil Administration & Engagement",
          href: "/ccae",
          description: "Governance programs",
          isSubheading: false,
          parent: "SWIS Institute",
        },
      ],
    },
    {
      title: "Careers",
      items: [
        { title: "Careers", href: "/Careers", description: "Available positions", isSubheading: false },
        { title: "Working at SWIS", href: "/Careers", description: "Employee experience", isSubheading: false },
        { title: "Code of Conduct", href: "/coc", description: "Our values and ethics", isSubheading: false },
      ],
    },
  ]

  const handleLinkClick = () => {
    setActiveDropdown(null)
    setMobileMenuOpen(false)
  }

  const renderDropdownItems = (items) => {
    return items.map((subItem, index) => {
      if (subItem.isSubheading) {
        return (
          <div key={index} className="col-span-full">
            <h3
              className="font-bold text-lg mb-3 mt-6 first:mt-0 border-b pb-2"
              style={{
                color: "#023080",
                borderColor: "#8e9fc5",
              }}
            >
              {subItem.title}
            </h3>
          </div>
        )
      } else {
        return (
          <Link
            key={index}
            to={subItem.href}
            onClick={handleLinkClick}
            className={`group block p-3 rounded-lg transition-all duration-200 hover:shadow-sm ${
              subItem.parent ? "ml-4" : ""
            }`}
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
            <h4
              className="font-semibold text-base mb-1 group-hover:text-blue-700 transition-colors"
              style={{ color: "#04307b" }}
            >
              {subItem.title}
            </h4>
            <p className="text-xs leading-relaxed" style={{ color: "#8e9fc5" }}>
              {subItem.description}
            </p>
          </Link>
        )
      }
    })
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-white shadow-lg" : "bg-gradient-to-b from-black/60 via-black/30 to-transparent"
        }`}
      >
        {/* Top Info Bar - Hidden when scrolled */}
        <div
          className={`border-b transition-all duration-500 ${
            scrolled
              ? "h-0 opacity-0 overflow-hidden border-transparent -translate-y-full"
              : "h-12 opacity-100 border-white/20"
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
          <div
            className={`flex items-center justify-between transition-all duration-500 ${scrolled ? "h-14" : "h-16"}`}
          >
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/homepage">
                <img
                  src={scrolled ? "/swis-logo-blue.png" : "/swis-logo-white.png"}
                  alt="SWIS Foundation"
                  className={`transition-all duration-500 ${scrolled ? "h-10 w-auto" : "h-12 w-auto"}`}
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

              {/* Direct Links */}
              <Link
                to="/anushka"
                className={`transition-colors py-2 ${
                  scrolled ? "text-gray-700 hover:text-blue-600" : "text-white hover:text-orange-400"
                }`}
                style={{
                  color: scrolled ? "#023080" : undefined,
                }}
              >
                Join Us
              </Link>

              <Link
                to="/ContactPage"
                className={`transition-colors py-2 ${
                  scrolled ? "text-gray-700 hover:text-blue-600" : "text-white hover:text-orange-400"
                }`}
                style={{
                  color: scrolled ? "#023080" : undefined,
                }}
              >
                Contact Us
              </Link>
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
                {renderDropdownItems(navigationItems.find((item) => item.title === activeDropdown)?.items || [])}
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
                      {item.items
                        .filter((subItem) => !subItem.isSubheading)
                        .slice(0, 5)
                        .map((subItem, index) => (
                          <Link
                            key={index}
                            to={subItem.href}
                            onClick={handleLinkClick}
                            className="block transition-colors text-sm py-1 hover:text-[#04307b]"
                            style={{ color: "#8e9fc5" }}
                          >
                            {subItem.title}
                          </Link>
                        ))}
                    </div>
                  </div>
                ))}

                {/* Direct Links for Mobile */}
                <div className="space-y-3 pt-4">
                  <Link
                    to="/anushka"
                    onClick={handleLinkClick}
                    className="block font-semibold transition-colors py-2"
                    style={{ color: "#023080" }}
                  >
                    Join Us
                  </Link>
                  <Link
                    to="/ContactPage"
                    onClick={handleLinkClick}
                    className="block font-semibold transition-colors py-2"
                    style={{ color: "#023080" }}
                  >
                    Contact Us
                  </Link>
                </div>
              </nav>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default ScrollHeader
