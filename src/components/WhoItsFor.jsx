import React from 'react'

const WhoItsFor = () => {
  const perfectFor = [
    'Freelancers who want to land local clients without cold calling',
    'Marketing agency owners who need to close deals faster',
    'Video creators looking for a simple way to pitch local businesses',
    'Salespeople who want to walk in with proof, not promises',
    'Entrepreneurs building a local marketing business from scratch',
    'Anyone tired of explaining what they do instead of showing it',
  ]

  const notFor = [
    'People who want to "think about it" before taking action',
    'Anyone waiting for the perfect time to get started',
    'Folks who prefer theory over execution',
    'People who need someone to hold their hand through every step',
    'Anyone who thinks local businesses are "too small" to pay',
  ]

  return (
    <section id="who-its-for" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 section-fade">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            This Is For People Who Want To{' '}
            <span className="text-matrix-green">Show Proof, Not Pitch Theory.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Perfect For */}
          <div className="card-matrix section-fade">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl">✅</span>
              <h3 className="text-2xl font-bold text-white">Perfect For</h3>
            </div>
            <ul className="space-y-4">
              {perfectFor.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-matrix-green mt-1">→</span>
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Not For */}
          <div className="card-matrix border-red-900/50 section-fade">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl">❌</span>
              <h3 className="text-2xl font-bold text-white">Not For</h3>
            </div>
            <ul className="space-y-4">
              {notFor.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">×</span>
                  <span className="text-gray-400">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhoItsFor
