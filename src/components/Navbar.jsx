import React, { useState, useEffect } from 'react'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#how-it-works', label: 'How It Works' },
    { href: '#who-its-for', label: 'Who It\'s For' },
    { href: '#what-it-creates', label: 'What It Creates' },
    { href: '#get-started', label: 'Get Started' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-black/95 backdrop-blur-md shadow-lg shadow-matrix-green/10' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <img 
              src="/kingston-logo.jpg" 
              alt="The Kingston Agency" 
              className="h-12 w-auto object-contain"
            />
            <span className="text-white font-bold text-sm lg:text-base hidden sm:block">
              The Parking Lot Promo Machine
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-matrix-green transition-colors duration-200 text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://gregsain.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm py-2 px-6"
            >
              Build My First Promo
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-matrix-green p-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-black/95 backdrop-blur-md border-t border-matrix-dark">
            <div className="px-4 py-4 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block text-gray-300 hover:text-matrix-green transition-colors py-2"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://gregsain.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary block text-center py-3"
              >
                Build My First Promo
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
