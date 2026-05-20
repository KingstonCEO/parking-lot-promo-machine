import React from 'react'

const Hero = () => {
  const steps = [
    { icon: '📸', title: 'Snap the Business' },
    { icon: '⚡', title: 'Build the Promo' },
    { icon: '💰', title: 'Make the Offer' },
  ]

  return (
    <section className="relative min-h-screen flex items-center pt-20 lg:pt-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="section-fade">
            {/* Eyebrow */}
            <p className="text-matrix-green font-mono text-sm mb-4 tracking-wider">
              Greg Sain of The Kingston Agency presents...
            </p>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-tight mb-6">
              THE PARKING LOT{' '}
              <span className="text-matrix-green text-glow">PROMO MACHINE</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl sm:text-2xl text-gray-300 mb-8 font-medium">
              Walk up. Look around. Snap the business. Command the machine. Walk back in with the pitch.
            </p>

            {/* Supporting Copy */}
            <div className="space-y-4 text-gray-400 mb-8">
              <p className="text-lg">This is not another "AI assistant."</p>
              <p className="text-lg">This is not a chatbot that asks you 15 questions.</p>
              <p className="text-lg">This is not a marketing course that tells you what to think about later.</p>
              <p className="text-lg text-white">
                This is a machine that turns a parking lot photo into a ready-to-pitch promo campaign — 
                before you even walk through the door.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://gregsain.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-center text-lg"
              >
                Build My First Parking Lot Promo
              </a>
              <a
                href="#how-it-works"
                className="btn-secondary text-center text-lg"
              >
                See How It Works
              </a>
            </div>
          </div>

          {/* Right Side - Video */}
          <div className="section-fade">
            <div className="relative rounded-2xl overflow-hidden border-2 border-matrix-green/30 glow-green">
              <video 
                className="w-full h-auto" 
                autoPlay 
                loop 
                playsInline
                controls
              >
                <source src="/parking-lot-demo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
