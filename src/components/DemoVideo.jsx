import React from 'react'

const DemoVideo = () => {
  return (
    <section className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 section-fade">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
              Watch The Parking Lot Promo Machine{' '}
              <span className="text-matrix-green">In Action</span>
            </h2>
            <p className="text-xl text-gray-400">
              See exactly how fast you can go from parking lot to pitch.
            </p>
          </div>

          {/* Video Placeholder */}
          <div className="card-matrix section-fade">
            <div className="aspect-video bg-black/80 rounded-lg flex items-center justify-center border border-matrix-dark relative overflow-hidden">
              {/* Scanline Effect */}
              <div className="absolute inset-0 pointer-events-none opacity-20"
                   style={{
                     background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,255,0,0.1) 2px, rgba(0,255,0,0.1) 4px)'
                   }} />
              
              {/* Play Button Placeholder */}
              <div className="relative z-10 text-center">
                <div className="w-24 h-24 rounded-full border-4 border-matrix-green flex items-center justify-center mx-auto mb-6 glow-green">
                  <svg className="w-10 h-10 text-matrix-green ml-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <p className="text-matrix-green font-mono text-lg mb-2">DEMO_VIDEO.mp4</p>
                <p className="text-gray-500">Demo Video Coming Soon</p>
              </div>

              {/* Corner Decorations */}
              <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-matrix-green/50" />
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-matrix-green/50" />
              <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-matrix-green/50" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-matrix-green/50" />
            </div>
          </div>

          {/* Supporting Copy */}
          <div className="mt-10 text-center section-fade">
            <p className="text-xl text-gray-300 mb-6">
              Real business. Real parking lot. Real promo.{' '}
              <span className="text-matrix-green font-semibold">Real results.</span>
            </p>
            <a
              href="#"
              className="btn-secondary inline-block"
            >
              Watch The Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DemoVideo
