import React from 'react'

const CoreHooks = () => {
  const hooks = [
    "I made this for your business before you even hired me.",
    "Your parking lot is your pitch deck.",
    "Walk in with proof, not promises.",
    "The best marketing doesn't need a meeting — it needs a moment.",
    "Close the deal before the conversation starts.",
    "They don't need to understand AI. They just need to see what you built.",
  ]

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-transparent via-matrix-dark/20 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 section-fade">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            Use These Hooks To{' '}
            <span className="text-matrix-green">Sell The Machine</span>
          </h2>
        </div>

        {/* Hooks Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {hooks.map((hook, index) => (
            <div
              key={index}
              className="card-matrix text-center p-8 section-fade group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <span className="text-matrix-green font-mono text-sm opacity-50 block mb-4">
                HOOK_{String(index + 1).padStart(2, '0')}
              </span>
              <p className="text-white font-bold text-lg group-hover:text-matrix-green transition-colors">
                "{hook}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CoreHooks
