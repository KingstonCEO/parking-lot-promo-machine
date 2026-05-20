import React from 'react'

const FinalCTA = () => {
  return (
    <section id="get-started" className="py-20 lg:py-32 bg-gradient-to-b from-transparent via-matrix-dark/30 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center section-fade">
          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white mb-6 leading-tight">
            Your Next Client Might Not Be Online.
          </h2>

          {/* Subheadline */}
          <p className="text-2xl sm:text-3xl text-matrix-green font-medium mb-8">
            They might be across the street.
          </p>

          {/* Body Copy */}
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Stop scrolling. Stop cold emailing. Stop waiting for inbound leads.{' '}
            <span className="text-white font-semibold">
              Walk into any local business with a promo built just for them
            </span>{' '}
            — and let the proof do the talking.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://gregsain.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg px-10 py-5"
            >
              Build My First Parking Lot Promo
            </a>
            <a
              href="https://gregsain.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-lg px-10 py-5"
            >
              Talk To Greg
            </a>
          </div>

          {/* Trust Element */}
          <div className="mt-12 pt-12 border-t border-matrix-dark">
            <p className="text-matrix-green font-mono text-sm">
              {'>'} READY TO CLOSE_
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FinalCTA
