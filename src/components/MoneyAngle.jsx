import React from 'react'

const MoneyAngle = () => {
  const sellOptions = [
    'One-time promo packages ($200-500 per business)',
    'Monthly promo retainers ($500-1500/month)',
    'Video production add-ons',
    'Social media management upsells',
    'Full marketing partnerships',
    'Referral deals with other creators',
  ]

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-transparent via-matrix-dark/20 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 section-fade">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
              Stop Selling Marketing.{' '}
              <span className="text-matrix-green">Sell The Moment They Can See.</span>
            </h2>
          </div>

          {/* Sell Options */}
          <div className="card-matrix mb-10 section-fade">
            <h3 className="text-xl font-bold text-white mb-6">With the Parking Lot Promo Machine, you can sell:</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {sellOptions.map((option, index) => (
                <div key={index} className="flex items-center gap-3">
                  <span className="text-matrix-green text-xl">💰</span>
                  <span className="text-gray-300">{option}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Highlight Box */}
          <div className="bg-matrix-green/10 border-2 border-matrix-green rounded-xl p-8 text-center glow-green section-fade">
            <p className="text-xl text-white mb-4">
              <span className="font-bold">Start simple:</span> "I made this for your business. 
              Want me to shoot it for $300?"
            </p>
            <p className="text-gray-300">
              That's a real conversation. Not a marketing consultation. 
              Not a discovery call. <span className="text-matrix-green font-semibold">A deal.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MoneyAngle
