import { ChevronDown, Search, Headphones, Sun } from "lucide-react"

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/80 via-black/40 to-transparent">
      {/* Top Info Bar */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-12 text-sm">
            {/* Left side - Rankings */}
            <div className="flex items-center space-x-8 text-white/90">
              <div className="flex items-center space-x-2">
                <span className="text-orange-400">IND Ranks 132</span>
                <span>- Education</span>
              </div>
              <div className="hidden sm:flex items-center space-x-2">
                <span className="text-orange-400">IND Ranks 111</span>
                <span>- Hunger</span>
              </div>
            </div>

            {/* Right side - Actions */}
            <div className="flex items-center space-x-6 text-white/90">
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
            <img src="/swis-logo.png" alt="SWIS Foundation" className="h-10 w-auto" />
          </div>

          {/* Navigation Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <button className="flex items-center space-x-1 text-white hover:text-orange-400 transition-colors py-2">
                <span>About Us</span>
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>

            <div className="relative group">
              <button className="flex items-center space-x-1 text-white hover:text-orange-400 transition-colors py-2">
                <span>Interventions</span>
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>

            <div className="relative group">
              <button className="flex items-center space-x-1 text-white hover:text-orange-400 transition-colors py-2">
                <span>Get Involved</span>
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>

            <div className="relative group">
              <button className="flex items-center space-x-1 text-white hover:text-orange-400 transition-colors py-2">
                <span>Careers</span>
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>

            <div className="relative group">
              <button className="flex items-center space-x-1 text-white hover:text-orange-400 transition-colors py-2">
                <span>News & Media</span>
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          </nav>

          {/* Right side icons */}
          <div className="flex items-center space-x-4">
            <button className="text-white hover:text-orange-400 transition-colors">
              <Headphones className="w-5 h-5" />
            </button>
            <button className="text-white hover:text-orange-400 transition-colors">
              <Sun className="w-5 h-5" />
            </button>
            <button className="text-white hover:text-orange-400 transition-colors">
              <Search className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
