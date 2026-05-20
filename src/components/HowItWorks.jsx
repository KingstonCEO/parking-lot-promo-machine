import React from 'react'

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'Find a Local Business',
      description: 'Drive by. Walk past. See it on your way somewhere. Any business with foot traffic or local customers.',
    },
    {
      number: '02',
      title: 'Spot the Opportunity',
      description: 'Notice what makes them unique — their sign, storefront, vibe, or even their parking lot.',
    },
    {
      number: '03',
      title: 'Snap a Photo',
      description: 'Take a quick picture. Storefront, signage, window display, whatever catches the eye.',
    },
    {
      number: '04',
      title: 'Run the Promo Machine',
      description: 'Feed the photo to the machine. It analyzes the business and builds a complete promo campaign instantly.',
    },
    {
      number: '05',
      title: 'Walk In With the Pitch',
      description: 'You now have hooks, scripts, captions, and CTAs. Walk inside and show them what you built — before they even hired you.',
    },
  ]

  return (
    <section id="how-it-works" className="py-20 lg:py-32 bg-gradient-to-b from-transparent via-matrix-dark/20 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 section-fade">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6">
            Find The Business. Spot The Opportunity.{' '}
            <span className="text-matrix-green">Build The Promo. Make The Offer.</span>
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`card-matrix section-fade ${index === 4 ? 'lg:col-span-1 md:col-span-2 lg:col-start-2' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <span className="text-matrix-green font-mono text-4xl font-bold opacity-50">
                  {step.number}
                </span>
                <div>
                  <h3 className="text-white font-bold text-xl mb-2">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Supporting Copy */}
        <div className="max-w-3xl mx-auto text-center section-fade">
          <p className="text-xl text-gray-300">
            This is the difference between <span className="text-white font-semibold">talkers</span> and{' '}
            <span className="text-matrix-green font-semibold">closers</span>.
          </p>
          <p className="text-xl text-gray-300 mt-4">
            Talkers explain what they could do. Closers show what they already built.
          </p>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
