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
          <a href="#" className="flex items-center justify-center group">
            <img 
              src="data:image/jpeg;base64,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" 
              alt="The Kingston Agency" 
              className="h-16 w-auto object-contain"
            />
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
