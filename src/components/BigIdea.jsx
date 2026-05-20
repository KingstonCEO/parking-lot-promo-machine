import React from 'react'

const BigIdea = () => {
  const businessTypes = [
    'restaurant',
    'barbershop',
    'gym',
    'dental office',
    'auto shop',
    'pet groomer',
    'chiropractor',
    'nail salon',
  ]

  return (
    <section className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto section-fade">
          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
            Most Local Businesses Don't Need Another Marketing Lecture.
          </h2>

          {/* Subheadline */}
          <p className="text-xl sm:text-2xl text-matrix-green mb-8 font-medium">
            They need calls. Appointments. Walk-ins. They need trust. Attention. Proof that you can actually help.
          </p>

          {/* Body Copy */}
          <div className="space-y-6 text-gray-300 text-lg mb-10">
            <p>
              Imagine pulling up to any local business — a {' '}
              <span className="text-white">{businessTypes.join(', ')}</span>
              {' '} — snapping a photo of their storefront, parking lot, signage, or window display...
            </p>
            <p>
              And within seconds, a full promo campaign drops into your hands. 
              Video scripts. Hooks. Captions. CTAs. Everything.
            </p>
            <p>
              That's what the Parking Lot Promo Machine does.
            </p>
            <p>
              You take the picture. You hit the machine. You walk back inside — not with a pitch, 
              but with <span className="text-matrix-green font-semibold">proof</span>.
            </p>
          </div>

          {/* Pull Quote */}
          <div className="border-l-4 border-matrix-green pl-6 py-4 bg-matrix-dark/30">
            <p className="text-2xl sm:text-3xl font-bold text-white italic">
              "Never walk into a local business empty-handed again."
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BigIdea
