import React from 'react'

export default function About() {
  return (
    <div>
      <section className="bg-ink text-cream">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
          <p className="text-terracotta text-xs tracking-[0.2em] uppercase mb-4">Our Story</p>
          <h1 className="font-display text-3xl md:text-5xl leading-tight max-w-2xl mx-auto">
            We make clothes meant to be worn, not just bought.
          </h1>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20 space-y-6 text-stone leading-relaxed">
        <p>
          Maison started with a simple frustration: too many clothes that looked good on a
          screen and fell apart after a few washes. We set out to build a small, considered
          collection for women, men, and kids — pieces in honest fabrics, cut to be worn
          often and kept for years.
        </p>
        <p>
          Every fabric is chosen first, every silhouette tested on real bodies, and every
          style is designed to pair easily with what's already in your closet. No seasonal
          gimmicks, no overproduction — just clothing built around how people actually
          dress.
        </p>
        <p>
          We work with small manufacturing partners who share our standards for fair labor
          and quality construction, and we keep our collection deliberately compact so every
          piece earns its place.
        </p>
      </section>

      <section className="bg-line/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid sm:grid-cols-3 gap-8 text-center">
          {[
            { stat: '12', label: 'Fabric mills, hand-selected' },
            { stat: '3', label: 'Collections a year, not 52' },
            { stat: '100%', label: 'Pieces tested before launch' },
          ].map((s) => (
            <div key={s.label}>
              <p className="font-display text-4xl text-terracotta mb-2">{s.stat}</p>
              <p className="text-sm text-stone">{s.label}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
