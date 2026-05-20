import React from 'react'

const Footer = () => {
  const links = [
    { label: 'gregsain.com', href: 'https://gregsain.com' },
    { label: 'thekingstonagency.io', href: 'https://thekingstonagency.io' },
    { label: 'anyoffertrafficmachine.com', href: 'https://anyoffertrafficmachine.com' },
  ]

  return (
    <footer className="py-12 border-t border-matrix-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Logo/Title */}
          <div className="mb-6">
            <p className="text-matrix-green font-mono text-lg mb-2">
              {'>'} THE PARKING LOT PROMO MACHINE
            </p>
            <p className="text-gray-500 text-sm">
              Powered by The Kingston Agency
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-matrix-green transition-colors text-sm"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Tagline */}
          <div className="border-t border-matrix-dark pt-8">
            <p className="text-gray-500 font-mono text-sm">
              Take the picture. Build the promo. Make the offer.
            </p>
          </div>

          {/* Copyright */}
          <p className="text-gray-600 text-xs mt-6">
            © {new Date().getFullYear()} Greg Sain / The Kingston Agency. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
