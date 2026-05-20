import React from 'react'

const BuiltForLocal = () => {
  const businessTypes = [
    'Restaurants',
    'Barbershops',
    'Hair Salons',
    'Nail Salons',
    'Auto Repair Shops',
    'Car Washes',
    'Gyms & Fitness Studios',
    'Yoga Studios',
    'Dental Offices',
    'Chiropractors',
    'Med Spas',
    'Pet Groomers',
    'Veterinarians',
    'Dry Cleaners',
    'Coffee Shops',
    'Bakeries',
    'Florists',
    'Real Estate Offices',
    'Insurance Agencies',
    'Law Firms',
    'Accounting Firms',
    'HVAC Companies',
    'Plumbers',
    'Electricians',
    'Landscapers',
  ]

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-transparent via-matrix-dark/20 to-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 section-fade">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6">
            Built For Any Business With{' '}
            <span className="text-matrix-green">Money Hiding In Plain Sight.</span>
          </h2>
        </div>

        {/* Business Types Cloud */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 section-fade">
          {businessTypes.map((type, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-black/60 border border-matrix-dark rounded-full text-gray-300 text-sm
                         hover:border-matrix-green hover:text-matrix-green transition-all duration-200 cursor-default"
            >
              {type}
            </span>
          ))}
        </div>

        {/* Supporting Copy */}
        <div className="max-w-3xl mx-auto text-center section-fade">
          <p className="text-xl text-gray-300">
            Every one of these business owners understands one thing:{' '}
            <span className="text-white font-semibold">promos bring people in the door</span>.
          </p>
          <p className="text-xl text-gray-300 mt-4">
            They don't need to understand AI. They don't need a marketing degree.{' '}
            <span className="text-matrix-green font-semibold">They just need to see what you built for them.</span>
          </p>
        </div>
      </div>
    </section>
  )
}

export default BuiltForLocal
