import React from 'react'

const WhatItCreates = () => {
  const outputs = [
    {
      icon: '🎯',
      title: 'Promo Hook',
      description: 'Attention-grabbing opener customized to their specific business and location.',
    },
    {
      icon: '🎬',
      title: 'Video Script',
      description: 'Word-for-word script ready to shoot on the spot or hand to their team.',
    },
    {
      icon: '🎥',
      title: 'Scene Plan',
      description: 'Shot-by-shot breakdown of how to film the promo using their actual location.',
    },
    {
      icon: '📱',
      title: 'Social Caption',
      description: 'Ready-to-post caption with hashtags for Instagram, Facebook, or TikTok.',
    },
    {
      icon: '🔥',
      title: 'Call-To-Action',
      description: 'Clear, compelling CTA that drives calls, visits, or bookings.',
    },
    {
      icon: '💼',
      title: 'Client Pitch',
      description: 'How to present this promo to the business owner and close the deal.',
    },
    {
      icon: '📩',
      title: 'Follow-Up Message',
      description: 'Pre-written follow-up to send after your initial conversation.',
    },
    {
      icon: '📈',
      title: 'Upsell Angle',
      description: 'Ideas for expanding this into a monthly package or bigger project.',
    },
  ]

  return (
    <section id="what-it-creates" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 section-fade">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            One Business. One Prompt.{' '}
            <span className="text-matrix-green">A Whole Promo Campaign.</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            The machine doesn't just give you ideas. It gives you everything you need to walk in and deliver.
          </p>
        </div>

        {/* Output Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {outputs.map((output, index) => (
            <div
              key={index}
              className="card-matrix text-center section-fade"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="text-4xl mb-4">{output.icon}</div>
              <h3 className="text-white font-bold text-lg mb-2">{output.title}</h3>
              <p className="text-gray-400 text-sm">{output.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhatItCreates
