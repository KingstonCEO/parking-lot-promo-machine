import React from 'react'

const SamplePitch = () => {
  return (
    <section className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 section-fade">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
              The Pitch That{' '}
              <span className="text-matrix-green">Opens The Door</span>
            </h2>
            <p className="text-xl text-gray-400">
              Here's exactly what you say when you walk in.
            </p>
          </div>

          {/* Script Card */}
          <div className="card-matrix section-fade">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-matrix-green font-mono text-sm">{'>'} SAMPLE_PITCH.txt</span>
              <div className="flex-1 h-px bg-matrix-dark" />
            </div>
            
            <div className="bg-black/50 rounded-lg p-6 font-mono text-gray-300 space-y-4 border border-matrix-dark">
              <p>"Hey — I was just driving by and your place caught my eye."</p>
              <p>"I do short promo videos for local businesses."</p>
              <p>"I actually pulled into your parking lot and made a sample promo for you — just based on what I saw from outside."</p>
              <p className="text-white">"Want to see it?"</p>
              <p className="text-matrix-green">[Show them the promo on your phone]</p>
              <p>"If you like it, I can shoot the real version for you this week."</p>
              <p>"Most businesses I work with pay $300-500 for something like this."</p>
              <p className="text-white">"Sound fair?"</p>
            </div>
          </div>

          {/* Supporting Copy */}
          <div className="mt-10 text-center section-fade">
            <p className="text-xl text-gray-300">
              No cold email. No sales deck. No "let me schedule a call."
            </p>
            <p className="text-xl text-gray-300 mt-4">
              Just proof. In person. <span className="text-matrix-green font-semibold">Ready to close.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SamplePitch
